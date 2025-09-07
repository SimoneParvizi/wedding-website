#!/usr/bin/env python3
"""
Wedding Venues Excel Generator

This script processes venue data from a comprehensive JSON file and creates
an Excel spreadsheet with venue information including name, address, phone,
email, capacity, accommodation, and pricing details.

Usage:
    python create_venues_excel.py [input_json_file] [output_excel_file]

If no arguments provided, uses default filenames:
    - Input: comprehensive_tuscany_venues.json
    - Output: tuscany_wedding_venues.xlsx
"""

import json
import pandas as pd
import sys
import os
from datetime import datetime


def extract_venue_data(venues):
    """
    Extract venue information into Excel-ready format
    
    Args:
        venues (list): List of venue dictionaries
        
    Returns:
        list: List of dictionaries ready for DataFrame conversion
    """
    excel_data = []
    
    for venue in venues:
        row = {
            'Venue Name': venue.get('venue_name', ''),
            'Street Address': venue.get('full_address') or venue.get('location', ''),
            'Phone Number': '',
            'Email': '',
            'Max Guests': '',
            'Accommodation Sleeps': '',
            'Price Information': '',
            'Source': venue.get('source', ''),
            'Website': '',
            'Link': venue.get('link', ''),
            'Features': ''
        }
        
        # Extract contact information
        if 'contact' in venue:
            contact = venue['contact']
            row['Phone Number'] = contact.get('phone', '')
            row['Email'] = contact.get('email', '')
            row['Website'] = contact.get('website', '')
        
        # Extract capacity information
        if 'capacity' in venue:
            capacity = venue['capacity']
            if isinstance(capacity, dict):
                # Handle various capacity fields
                max_guests = (capacity.get('max_wedding_guests') or 
                             capacity.get('max_guests') or 
                             capacity.get('reception_capacity') or 
                             capacity.get('ceremony_capacity') or
                             capacity.get('wedding_party_guests'))
                if max_guests:
                    row['Max Guests'] = str(max_guests)
                
                sleeps = (capacity.get('accommodation_sleeps') or 
                         capacity.get('bedrooms') or
                         capacity.get('suites'))
                if sleeps:
                    row['Accommodation Sleeps'] = str(sleeps)
        
        # Extract pricing information
        pricing_info = []
        
        if 'pricing' in venue:
            pricing = venue['pricing']
            if isinstance(pricing, dict):
                for key, value in pricing.items():
                    pricing_info.append(f'{key}: {value}')
        
        if 'pricing_2026' in venue:
            pricing = venue['pricing_2026']
            if isinstance(pricing, dict):
                for key, value in pricing.items():
                    pricing_info.append(f'{key}: {value}')
        
        if 'starting_price' in venue:
            pricing_info.append(f'Starting price: {venue["starting_price"]}')
        
        if 'pricing_note' in venue:
            pricing_info.append(venue['pricing_note'])
        
        row['Price Information'] = '; '.join(pricing_info)
        
        # Extract features information
        features_info = []
        if 'features' in venue and isinstance(venue['features'], list):
            features_info = venue['features']
        row['Features'] = '; '.join(features_info)
        
        excel_data.append(row)
    
    return excel_data


def generate_summary_stats(df):
    """
    Generate summary statistics about the venue data
    
    Args:
        df (DataFrame): Venue data
        
    Returns:
        dict: Summary statistics
    """
    stats = {
        'total_venues': len(df),
        'venues_with_phone': len(df[df['Phone Number'] != '']),
        'venues_with_email': len(df[df['Email'] != '']),
        'venues_with_pricing': len(df[df['Price Information'] != '']),
        'venues_with_accommodation': len(df[df['Accommodation Sleeps'] != '']),
        'venues_with_capacity': len(df[df['Max Guests'] != '']),
        'venues_with_links': len(df[df['Link'] != '']),
        'venues_with_features': len(df[df['Features'] != ''])
    }
    return stats


def main():
    # Handle command line arguments
    if len(sys.argv) >= 2:
        input_file = sys.argv[1]
    else:
        input_file = 'comprehensive_tuscany_venues.json'
    
    if len(sys.argv) >= 3:
        output_file = sys.argv[2]
    else:
        output_file = 'tuscany_wedding_venues.xlsx'
    
    # Check if input file exists
    if not os.path.exists(input_file):
        print(f"Error: Input file '{input_file}' not found!")
        sys.exit(1)
    
    try:
        # Read the comprehensive venue data
        print(f"Reading venue data from {input_file}...")
        with open(input_file, 'r') as f:
            data = json.load(f)
        
        # Extract venues list
        if 'tuscany_wedding_venues' in data and 'comprehensive_venue_list' in data['tuscany_wedding_venues']:
            venues = data['tuscany_wedding_venues']['comprehensive_venue_list']
        else:
            # Try to handle different JSON structures
            venues = data if isinstance(data, list) else []
        
        if not venues:
            print("No venues found in the JSON file!")
            sys.exit(1)
        
        print(f"Found {len(venues)} venues to process...")
        
        # Extract venue data for Excel
        excel_data = extract_venue_data(venues)
        
        # Create DataFrame
        df = pd.DataFrame(excel_data)
        
        # Sort by venue name
        df = df.sort_values('Venue Name')
        
        # Generate summary statistics
        stats = generate_summary_stats(df)
        
        # Save to Excel with multiple sheets
        print(f"Creating Excel file: {output_file}...")
        with pd.ExcelWriter(output_file, engine='openpyxl') as writer:
            # Main venues data
            df.to_excel(writer, sheet_name='Wedding Venues', index=False)
            
            # Summary sheet
            summary_df = pd.DataFrame([
                ['Total Venues', stats['total_venues']],
                ['Venues with Phone Numbers', stats['venues_with_phone']],
                ['Venues with Email Addresses', stats['venues_with_email']],
                ['Venues with Pricing Information', stats['venues_with_pricing']],
                ['Venues with Accommodation Info', stats['venues_with_accommodation']],
                ['Venues with Capacity Information', stats['venues_with_capacity']],
                ['Venues with Links', stats['venues_with_links']],
                ['Venues with Features', stats['venues_with_features']],
                ['Generated On', datetime.now().strftime('%Y-%m-%d %H:%M:%S')]
            ], columns=['Metric', 'Count'])
            
            summary_df.to_excel(writer, sheet_name='Summary', index=False)
            
            # Venues with complete contact info (phone + email)
            complete_contact = df[(df['Phone Number'] != '') & (df['Email'] != '')]
            if len(complete_contact) > 0:
                complete_contact.to_excel(writer, sheet_name='Complete Contact Info', index=False)
        
        # Print summary
        print("\n" + "="*50)
        print("WEDDING VENUES EXCEL GENERATED SUCCESSFULLY!")
        print("="*50)
        print(f"📁 Output file: {output_file}")
        print(f"📊 Total venues: {stats['total_venues']}")
        print(f"📞 Venues with phone numbers: {stats['venues_with_phone']}")
        print(f"📧 Venues with email addresses: {stats['venues_with_email']}")
        print(f"💰 Venues with pricing info: {stats['venues_with_pricing']}")
        print(f"🏠 Venues with accommodation info: {stats['venues_with_accommodation']}")
        print(f"👥 Venues with capacity info: {stats['venues_with_capacity']}")
        print(f"🔗 Venues with links: {stats['venues_with_links']}")
        print(f"✨ Venues with features: {stats['venues_with_features']}")
        
        # Highlight venues with complete contact info
        complete_contact_count = len(df[(df['Phone Number'] != '') & (df['Email'] != '')])
        print(f"⭐ Venues with BOTH phone AND email: {complete_contact_count}")
        
        if complete_contact_count > 0:
            print("\nVenues with complete contact information:")
            complete_venues = df[(df['Phone Number'] != '') & (df['Email'] != '')]
            for _, venue in complete_venues.iterrows():
                print(f"  • {venue['Venue Name']} - {venue['Phone Number']} - {venue['Email']}")
        
        print("\n✅ Excel file created successfully!")
        
    except json.JSONDecodeError:
        print(f"Error: Invalid JSON format in '{input_file}'")
        sys.exit(1)
    except Exception as e:
        print(f"Error: {str(e)}")
        sys.exit(1)


if __name__ == "__main__":
    main()