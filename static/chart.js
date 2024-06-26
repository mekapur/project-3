const data = {
    'Total, all countries or areas': [[2000, 2005, 2010, 2015, 2020],[5.3, 15.6, 28.5, 40.0, 59.6]],
    'Northern Africa': [[2000, 2005, 2010, 2015, 2020],[0.6, 9.7, 23.2, 36.6, 64.8]],
    'Sub-Saharan Africa': [[2000, 2005, 2010, 2015, 2020],[0.9, 2.0, 6.0, 16.0, 31.5]],
    'Eastern Africa': [[2000, 2005, 2010, 2015, 2020],[0.6, 1.2, 3.2, 10.5, 17.2]],
    'Middle Africa': [[2000, 2005, 2010, 2015, 2020],[0.3, 0.7, 2.1, 10.0, 27.2]],
    'Southern Africa': [[2000, 2005, 2010, 2015, 2020],[4.9, 7.0, 22.0, 49.1, 68.5]],
    'Western Africa': [[2000, 2005, 2010, 2015, 2020],[0.1, 2.5, 7.7, 18.9, 42.9]],
    'Northern America': [[2000, 2005, 2010, 2015, 2020],[51.3, 68.3, 72.5, 76.1, 90.8]],
    'Latin America & the Caribbean': [[2000, 2005, 2010, 2015, 2020],[5.2, 16.6, 34.7, 54.3, 73.0]],
    'Caribbean': [[2000, 2005, 2010, 2015, 2020], [3.5, 11.0, 21.2, 38.0, 65.6]],
    'Central Asia': [[2000, 2005, 2010, 2015, 2020],[1.0, 3.3, 18.4, 43.7, 64.7]],
    'Eastern Asia': [[2000, 2005, 2010, 2015, 2020],[5.7, 16.2, 39.5, 54.5, 72.4]],
    'South-central Asia': [[2000, 2005, 2010, 2015, 2020],[0.6, 2.8, 7.9, 16.5, 43.0]],
    'South-eastern Asia': [[2000, 2005, 2010, 2015, 2020],[2.6, 8.7, 18.9, 31.6, 58.7]],
    'Southern Asia': [[2000, 2005, 2010, 2015, 2020],[0.6, 2.8, 7.5, 15.5, 42.2]],
    'Western Asia': [[2000, 2005, 2010, 2015, 2020],[3.5, 11.0, 32.4, 50.0, 69.1]],
    'Oceania': [[2000, 2005, 2010, 2015, 2020], [33.6, 47.1, 56.9, 64.3, 78.3]],
    'Australia and New Zealand': [[2000, 2005, 2010, 2015, 2020],[46.8, 63.0, 76.7, 84.7, 95.8]],
    'Micronesia': [[2000, 2005, 2010, 2015, 2020], [3.7, 11.9, 20.0, 31.5, 40.1]],
    'Albania': [[2000, 2005, 2010, 2015, 2020], [0.1, 6.0, 45.0, 56.9, 72.2]],
    'Algeria': [[2000, 2005, 2010, 2015, 2020], [0.5, 5.8, 12.5, 38.2, 64.0]],
    'Andorra': [[2000, 2005, 2010, 2015, 2020], [10.5, 37.6, 81.0, 87.9, 93.2]],
    'Angola': [[2000, 2005, 2010, 2015, 2020], [0.1, 1.1, 2.8, 22.0, 32.6]],
    'Antigua and Barbuda': [[2000, 2005, 2010, 2015, 2020],[6.5, 27.0, 47.0, 70.0, 95.7]],
    'Argentina': [[2000, 2005, 2010, 2015, 2020], [7.0, 17.7, 45.0, 68.0, 85.5]],
    'Armenia': [[2000, 2005, 2010, 2015, 2020], [1.3, 5.3, 25.0, 59.1, 76.5]],
    'Australia': [[2000, 2005, 2010, 2015, 2020], [46.8, 63.0, 76.0, 84.6, 96.4]],
    'Austria': [[2000, 2005, 2010, 2015, 2020], [33.7, 58.0, 75.2, 83.9, 87.5]],
    'Azerbaijan': [[2000, 2005, 2010, 2015, 2020], [0.1, 8.0, 46.0, 77.0, 84.6]],
    'Bahamas': [[2000, 2005, 2010, 2015, 2020], [8.0, 25.0, 43.0, 78.0, 92.5]],
    'Bahrain': [[2000, 2005, 2010, 2015, 2020], [6.2, 21.3, 55.0, 93.5, 99.7]],
    'Bangladesh': [[2000, 2005, 2010, 2015, 2020], [0.1, 0.2, 3.7, 12.9, 32.9]],
    'Barbados': [[2000, 2005, 2010, 2015, 2020], [4.0, 52.5, 65.1, 76.1, 82.5]],
    'Belgium': [[2000, 2005, 2010, 2015, 2020], [29.4, 55.8, 75.0, 85.1, 91.5]],
    'Belize': [[2000, 2005, 2010, 2015, 2020], [6.0, 17.0, 28.2, 41.6, 59.5]],
    'Benin': [[2000, 2005, 2010, 2015, 2020], [0.2, 1.3, 3.1, 11.3, 28.2]],
    'Bhutan': [[2000, 2005, 2010, 2015, 2020], [0.4, 3.8, 13.6, 39.8, 79.9]],
    'Bolivia (Plurin. State of)': [[2000, 2005, 2010, 2015, 2020],[1.4, 5.2, 22.4, 37.5, 59.9]],
    'Bosnia and Herzegovina': [[2000, 2005, 2010, 2015, 2020],[1.1, 21.3, 42.8, 52.6, 73.2]],
    'Botswana': [[2000, 2005, 2010, 2015, 2020], [2.9, 3.3, 6.0, 37.3, 72.7]],
    'Brazil': [[2000, 2005, 2010, 2015, 2020], [2.9, 21.0, 40.7, 58.3, 81.3]],
    'Brunei Darussalam': [[2000, 2005, 2010, 2015, 2020],[9.0, 36.5, 53.0, 71.2, 96.1]],
    'Bulgaria': [[2000, 2005, 2010, 2015, 2020], [5.4, 20.0, 46.2, 56.7, 70.2]],
    'Burkina Faso': [[2000, 2005, 2010, 2015, 2020], [0.1, 0.5, 2.4, 6.6, 13.9]],
    'Burundi': [[2000, 2005, 2010, 2015, 2020], [0.1, 0.5, 1.0, 2.0, 3.8]],
    'Cabo Verde': [[2000, 2005, 2010, 2015, 2020], [1.8, 6.1, 30.0, 42.7, 63.2]],
    'Cambodia': [[2000, 2005, 2010, 2015, 2020], [0.0, 0.3, 1.3, 18.0, 53.7]],
    'Cameroon': [[2000, 2005, 2010, 2015, 2020], [0.3, 1.4, 4.3, 18.3, 45.5]],
    'Canada': [[2000, 2005, 2010, 2015, 2020], [51.3, 71.7, 80.3, 90.0, 92.3]],
    'Central African Republic': [[2000, 2005, 2010, 2015, 2020],[0.1, 0.3, 2.0, 2.9, 8.6]],
    'Chad': [[2000, 2005, 2010, 2015, 2020], [0.0, 0.4, 1.7, 3.5, 11.7]],
    'Chile': [[2000, 2005, 2010, 2015, 2020], [16.6, 31.2, 45.0, 76.6, 86.4]],
    'China': [[2000, 2005, 2010, 2015, 2020], [1.8, 8.5, 34.3, 50.3, 70.1]],
    'China, Hong Kong SAR': [[2000, 2005, 2010, 2015, 2020],[27.8, 56.9, 72.0, 84.9, 92.4]],
    'China, Macao SAR': [[2000, 2005, 2010, 2015, 2020],[13.6, 34.9, 55.2, 77.6, 88.3]],
    'Colombia': [[2000, 2005, 2010, 2015, 2020], [2.2, 11.0, 36.5, 55.9, 70.9]],
    'Comoros': [[2000, 2005, 2010, 2015, 2020], [0.3, 2.0, 5.1, 7.5, 21.2]],
    'Costa Rica': [[2000, 2005, 2010, 2015, 2020], [5.8, 22.1, 36.5, 59.8, 80.5]],
    "Côte d'Ivoire": [[2000, 2005, 2010, 2015, 2020],[0.2, 1.0, 2.7, 16.7, 41.4]],
    'Croatia': [[2000, 2005, 2010, 2015, 2020], [6.6, 33.1, 56.6, 69.8, 78.3]],
    'Cuba': [[2000, 2005, 2010, 2015, 2020], [0.5, 9.7, 15.9, 37.3, 71.1]],
    'Cyprus': [[2000, 2005, 2010, 2015, 2020], [15.3, 32.8, 53.0, 71.7, 90.8]],
    'Czechia': [[2000, 2005, 2010, 2015, 2020], [9.8, 35.3, 68.8, 75.7, 81.3]],
    'Dem. Rep. of the Congo': [[2000, 2005, 2010, 2015, 2020],[0.0, 0.2, 0.7, 3.8, 22.9]],
    'Denmark': [[2000, 2005, 2010, 2015, 2020], [39.2, 82.7, 88.7, 96.3, 96.5]],
    'Djibouti': [[2000, 2005, 2010, 2015, 2020], [0.2, 1.0, 6.5, 22.9, 61.3]],
    'Dominica': [[2000, 2005, 2010, 2015, 2020], [8.8, 38.5, 47.5, 65.0, 77.1]],
    'Dominican Republic': [[2000, 2005, 2010, 2015, 2020],[3.7, 11.5, 31.4, 54.2, 82.2]],
    'Ecuador': [[2000, 2005, 2010, 2015, 2020], [1.5, 6.0, 29.0, 48.9, 70.7]],
    'Egypt': [[2000, 2005, 2010, 2015, 2020], [0.6, 12.8, 21.6, 37.8, 71.9]],
    'El Salvador': [[2000, 2005, 2010, 2015, 2020], [1.2, 4.2, 15.9, 26.8, 54.6]],
    'Equatorial Guinea': [[2000, 2005, 2010, 2015, 2020],[0.1, 1.1, 6.0, 21.3, 53.8]],
    'Estonia': [[2000, 2005, 2010, 2015, 2020], [28.6, 61.5, 74.1, 88.4, 89.1]],
    'Eswatini': [[2000, 2005, 2010, 2015, 2020], [0.9, 3.7, 11.0, 25.6, 56.4]],
    'Ethiopia': [[2000, 2005, 2010, 2015, 2020], [0.0, 0.2, 0.8, 13.9, 16.4]],
    'Fiji': [[2000, 2005, 2010, 2015, 2020], [1.5, 8.5, 20.0, 42.5, 84.9]],
    'Finland': [[2000, 2005, 2010, 2015, 2020], [37.2, 74.5, 86.9, 86.4, 92.2]],
    'France': [[2000, 2005, 2010, 2015, 2020], [14.3, 42.9, 77.3, 78.0, 84.7]],
    'Gabon': [[2000, 2005, 2010, 2015, 2020], [1.2, 4.9, 13.0, 45.8, 70.8]],
    'Gambia': [[2000, 2005, 2010, 2015, 2020], [0.9, 3.8, 9.2, 17.6, 31.6]],
    'Georgia': [[2000, 2005, 2010, 2015, 2020], [0.5, 6.1, 26.9, 47.6, 72.5]],
    'Germany': [[2000, 2005, 2010, 2015, 2020], [30.2, 68.7, 82.0, 87.6, 89.8]],
    'Ghana': [[2000, 2005, 2010, 2015, 2020], [0.2, 1.8, 7.8, 23.0, 56.7]],
    'Greece': [[2000, 2005, 2010, 2015, 2020], [9.1, 24.0, 44.4, 66.8, 78.1]],
    'Grenada': [[2000, 2005, 2010, 2015, 2020], [4.1, 20.5, 27.0, 52.5, 74.7]],
    'Guatemala': [[2000, 2005, 2010, 2015, 2020], [0.7, 5.7, 10.5, 28.8, 47.5]],
    'Guinea': [[2000, 2005, 2010, 2015, 2020], [0.1, 0.5, 1.0, 9.2, 28.8]],
    'Guinea-Bissau': [[2000, 2005, 2010, 2015, 2020], [0.2, 1.9, 2.5, 6.1, 27.9]],
    'Guyana': [[2000, 2005, 2010, 2015, 2020], [0.6, 5.7, 29.9, 34.0, 81.8]],
    'Haiti': [[2000, 2005, 2010, 2015, 2020], [0.2, 6.4, 8.4, 14.2, 36.4]],
    'Honduras': [[2000, 2005, 2010, 2015, 2020], [1.2, 6.5, 11.1, 27.1, 43.5]],
    'Hungary': [[2000, 2005, 2010, 2015, 2020], [7.0, 39.0, 65.0, 72.8, 84.8]],
    'Iceland': [[2000, 2005, 2010, 2015, 2020], [44.5, 87.0, 93.4, 98.2, 99.5]],
    'India': [[2000, 2005, 2010, 2015, 2020], [0.5, 2.4, 7.5, 14.9, 43.4]],
    'Indonesia': [[2000, 2005, 2010, 2015, 2020], [0.9, 3.6, 10.9, 22.1, 53.7]],
    'Iran (Islamic Republic of)': [[2000, 2005, 2010, 2015, 2020],[0.9, 8.1, 15.9, 45.3, 75.6]],
    'Ireland': [[2000, 2005, 2010, 2015, 2020], [17.9, 41.6, 69.9, 83.5, 92.0]],
    'Israel': [[2000, 2005, 2010, 2015, 2020], [20.9, 25.2, 67.5, 77.4, 90.1]],
    'Italy': [[2000, 2005, 2010, 2015, 2020], [23.1, 35.0, 53.7, 58.1, 70.5]],
    'Jamaica': [[2000, 2005, 2010, 2015, 2020], [3.1, 12.8, 27.7, 42.2, 79.4]],
    'Japan': [[2000, 2005, 2010, 2015, 2020], [30.0, 66.9, 78.2, 91.1, 90.2]],
    'Jordan': [[2000, 2005, 2010, 2015, 2020], [2.6, 12.9, 27.2, 54.2, 75.4]],
    'Kazakhstan': [[2000, 2005, 2010, 2015, 2020], [0.7, 3.0, 31.6, 70.8, 85.9]],
    'Kenya': [[2000, 2005, 2010, 2015, 2020], [0.3, 3.1, 7.2, 16.6, 25.5]],
    'Kiribati': [[2000, 2005, 2010, 2015, 2020], [1.8, 4.0, 9.1, 14.9, 45.1]],
    'Kuwait': [[2000, 2005, 2010, 2015, 2020], [6.7, 25.9, 61.4, 82.0, 99.1]],
    'Kyrgyzstan': [[2000, 2005, 2010, 2015, 2020], [1.0, 10.5, 16.3, 30.2, 72.0]],
    "Lao People's Dem. Rep.": [[2000, 2005, 2010, 2015, 2020],[0.1, 0.9, 7.0, 18.2, 54.0]],
    'Latvia': [[2000, 2005, 2010, 2015, 2020], [6.3, 46.0, 68.4, 79.2, 88.9]],
    'Lebanon': [[2000, 2005, 2010, 2015, 2020], [8.0, 10.1, 43.7, 74.0, 83.1]],
    'Lesotho': [[2000, 2005, 2010, 2015, 2020], [0.2, 2.6, 3.9, 25.0, 42.9]],
    'Liechtenstein': [[2000, 2005, 2010, 2015, 2020],[36.5, 63.4, 80.0, 96.6, 94.4]],
    'Lithuania': [[2000, 2005, 2010, 2015, 2020], [6.4, 36.2, 62.1, 71.4, 83.1]],
    'Luxembourg': [[2000, 2005, 2010, 2015, 2020],[22.9, 70.0, 90.6, 96.4, 98.8]],
    'Madagascar': [[2000, 2005, 2010, 2015, 2020], [0.2, 0.6, 1.7, 4.2, 13.7]],
    'Malawi': [[2000, 2005, 2010, 2015, 2020], [0.1, 0.4, 2.3, 6.0, 18.9]],
    'Malaysia': [[2000, 2005, 2010, 2015, 2020], [21.4, 48.6, 56.3, 71.1, 89.6]],
    'Maldives': [[2000, 2005, 2010, 2015, 2020], [2.2, 6.9, 26.5, 54.5, 77.6]],
    'Mali': [[2000, 2005, 2010, 2015, 2020], [0.1, 0.5, 2.0, 10.3, 27.9]],
    'Malta': [[2000, 2005, 2010, 2015, 2020], [13.1, 41.2, 63.0, 76.0, 86.9]],
    'Mauritania': [[2000, 2005, 2010, 2015, 2020], [0.2, 0.7, 4.0, 17.6, 53.5]],
    'Mauritius': [[2000, 2005, 2010, 2015, 2020], [7.3, 15.2, 28.3, 50.1, 64.9]],
    'Mexico': [[2000, 2005, 2010, 2015, 2020], [5.1, 17.2, 31.1, 57.4, 71.5]],
    'Monaco': [[2000, 2005, 2010, 2015, 2020], [42.2, 55.5, 75.0, 93.4, 84.7]],
    'Morocco': [[2000, 2005, 2010, 2015, 2020], [0.7, 15.1, 52.0, 57.1, 84.1]],
    'Mozambique': [[2000, 2005, 2010, 2015, 2020], [0.1, 0.9, 4.2, 6.5, 16.3]],
    'Namibia': [[2000, 2005, 2010, 2015, 2020], [1.6, 4.0, 11.6, 25.7, 48.8]],
    'Nepal': [[2000, 2005, 2010, 2015, 2020], [0.2, 0.8, 7.9, 17.6, 45.8]],
    'Netherlands (Kingdom of the)': [[2000, 2005, 2010, 2015, 2020],[44.0, 81.0, 90.7, 91.7, 91.3]],
    'New Zealand': [[2000, 2005, 2010, 2015, 2020],[47.4, 62.7, 80.5, 85.2, 92.9]],
    'Nicaragua': [[2000, 2005, 2010, 2015, 2020], [1.0, 2.6, 10.0, 19.7, 53.4]],
    'Niger': [[2000, 2005, 2010, 2015, 2020], [0.0, 0.2, 0.8, 2.5, 21.5]],
    'Nigeria': [[2000, 2005, 2010, 2015, 2020], [0.1, 3.5, 11.5, 24.5, 51.5]],
    'North Macedonia': [[2000, 2005, 2010, 2015, 2020],[2.5, 26.5, 51.9, 70.4, 81.4]],
    'Norway': [[2000, 2005, 2010, 2015, 2020], [52.0, 82.0, 93.4, 96.8, 97.0]],
    'Oman': [[2000, 2005, 2010, 2015, 2020], [3.5, 6.7, 35.8, 73.5, 95.2]],
    'Other non-specified areas': [[2000, 2005, 2010, 2015, 2020],[28.1, 58.0, 71.5, 78.0, 89.0]],
    'Panama': [[2000, 2005, 2010, 2015, 2020], [6.6, 11.5, 40.1, 51.2, 65.5]],
    'Papua New Guinea': [[2000, 2005, 2010, 2015, 2020],
    [0.8, 1.7, 1.3, 7.9, 27.7]],
    'Paraguay': [[2000, 2005, 2010, 2015, 2020], [0.7, 7.9, 19.8, 49.7, 74.0]],
    'Peru': [[2000, 2005, 2010, 2015, 2020], [3.1, 17.1, 34.8, 40.9, 65.3]],
    'Philippines': [[2000, 2005, 2010, 2015, 2020], [2.0, 5.4, 25.0, 36.9, 47.1]],
    'Poland': [[2000, 2005, 2010, 2015, 2020], [7.3, 38.8, 62.3, 68.0, 83.2]],
    'Portugal': [[2000, 2005, 2010, 2015, 2020], [16.4, 35.0, 53.3, 68.6, 78.3]],
    'Qatar': [[2000, 2005, 2010, 2015, 2020], [4.9, 24.7, 69.0, 92.9, 99.7]],
    'Republic of Korea': [[2000, 2005, 2010, 2015, 2020],[44.7, 73.5, 83.7, 89.9, 96.5]],
    'Republic of Moldova': [[2000, 2005, 2010, 2015, 2020],[1.3, 14.6, 29.7, 43.1, 59.2]],
    'Romania': [[2000, 2005, 2010, 2015, 2020], [3.6, 21.5, 39.9, 55.8, 78.5]],
    'Russian Federation': [[2000, 2005, 2010, 2015, 2020],[2.0, 15.2, 49.0, 70.1, 85.0]],
    'Rwanda': [[2000, 2005, 2010, 2015, 2020], [0.1, 0.6, 8.0, 12.5, 23.8]],
    'Saint Kitts and Nevis': [[2000, 2005, 2010, 2015, 2020],[5.9, 34.0, 63.0, 75.7, 80.4]],
    'Saint Lucia': [[2000, 2005, 2010, 2015, 2020],[5.1, 21.6, 32.5, 57.3, 77.5]],
    'Saint Vincent & Grenadines': [[2000, 2005, 2010, 2015, 2020],[3.2, 9.2, 33.7, 49.4, 80.4]],
    'Samoa': [[2000, 2005, 2010, 2015, 2020], [0.6, 3.4, 7.0, 25.4, 69.2]],
    'Sao Tome and Principe': [[2000, 2005, 2010, 2015, 2020],[4.6, 13.8, 18.8, 25.8, 40.3]],
    'Saudi Arabia': [[2000, 2005, 2010, 2015, 2020],[2.2, 12.7, 41.0, 69.6, 97.9]],
    'Senegal': [[2000, 2005, 2010, 2015, 2020], [0.4, 4.8, 8.0, 21.7, 47.2]],
    'Seychelles': [[2000, 2005, 2010, 2015, 2020], [7.4, 25.4, 41.0, 54.3, 75.5]],
    'Sierra Leone': [[2000, 2005, 2010, 2015, 2020], [0.1, 0.2, 0.6, 6.3, 18.0]],
    'Singapore': [[2000, 2005, 2010, 2015, 2020], [36.0, 61.0, 71.0, 83.2, 92.0]],
    'Slovakia': [[2000, 2005, 2010, 2015, 2020], [9.4, 55.2, 75.7, 77.6, 89.9]],
    'Slovenia': [[2000, 2005, 2010, 2015, 2020], [15.1, 46.8, 70.0, 73.1, 86.6]],
    'Solomon Islands': [[2000, 2005, 2010, 2015, 2020],[0.5, 0.8, 5.0, 10.0, 35.9]],
    'South Africa': [[2000, 2005, 2010, 2015, 2020],[5.3, 7.5, 24.0, 51.9, 70.3]],
    'Spain': [[2000, 2005, 2010, 2015, 2020], [13.6, 47.9, 65.8, 78.7, 93.2]],
    'Suriname': [[2000, 2005, 2010, 2015, 2020], [2.5, 6.4, 31.6, 42.8, 62.1]],
    'Sweden': [[2000, 2005, 2010, 2015, 2020], [45.7, 84.8, 90.0, 90.6, 94.5]],
    'Switzerland': [[2000, 2005, 2010, 2015, 2020],[47.1, 70.1, 83.9, 87.5, 94.4]],
    'Syrian Arab Republic': [[2000, 2005, 2010, 2015, 2020],[0.2, 5.6, 20.7, 30.0, 35.8]],
    'Thailand': [[2000, 2005, 2010, 2015, 2020], [3.7, 15.0, 22.4, 39.3, 77.8]],
    'Togo': [[2000, 2005, 2010, 2015, 2020], [0.8, 1.8, 3.0, 7.1, 29.1]],
    'Tonga': [[2000, 2005, 2010, 2015, 2020], [2.4, 4.9, 16.0, 38.7, 66.6]],
    'Trinidad and Tobago': [[2000, 2005, 2010, 2015, 2020],[7.7, 29.0, 48.5, 65.1, 78.7]],
    'Tunisia': [[2000, 2005, 2010, 2015, 2020], [2.8, 9.7, 36.8, 46.5, 72.8]],
    'Türkiye': [[2000, 2005, 2010, 2015, 2020], [3.8, 15.5, 39.8, 53.7, 77.7]],
    'Uganda': [[2000, 2005, 2010, 2015, 2020], [0.2, 1.7, 4.3, 5.8, 6.1]],
    'Ukraine': [[2000, 2005, 2010, 2015, 2020], [0.7, 3.7, 23.3, 48.9, 75.0]],
    'United Arab Emirates': [[2000, 2005, 2010, 2015, 2020],[23.6, 40.0, 68.0, 90.5, 100.0]],
    'United Kingdom': [[2000, 2005, 2010, 2015, 2020],[26.8, 70.0, 85.0, 92.0, 94.8]],
    'United Rep. of Tanzania': [[2000, 2005, 2010, 2015, 2020],[0.1, 1.1, 2.9, 10.0, 23.4]],
    'United States of America': [[2000, 2005, 2010, 2015, 2020],[43.1, 68.0, 71.7, 74.6, 90.6]],
    'Uruguay': [[2000, 2005, 2010, 2015, 2020], [10.5, 20.1, 46.4, 64.6, 86.3]],
    'Uzbekistan': [[2000, 2005, 2010, 2015, 2020], [0.5, 3.3, 15.9, 42.8, 71.1]],
    'Vanuatu': [[2000, 2005, 2010, 2015, 2020], [2.1, 5.1, 8.0, 22.4, 53.3]],
    'Vietnam': [[2000, 2005, 2010, 2015, 2020], [0.3, 12.7, 30.7, 45.0, 70.3]],
    'Zambia': [[2000, 2005, 2010, 2015, 2020], [0.2, 1.3, 3.0, 8.8, 18.1]],
    'Zimbabwe': [[2000, 2005, 2010, 2015, 2020], [0.4, 2.4, 6.4, 22.7, 29.3]],
    'LDC§': [[2000, 2005, 2010, 2015, 2020], [0.4, 0.7, 3.3, 10.7, 27.6]]};

    function updateChart() {
        const country = document.getElementById('countryInput').value;
        d3.select("#chart").selectAll("*").remove();
        document.getElementById('reminder').style.display = 'none';
    
        if (data[country]) {
            const years = data[country][0];
            const percentages = data[country][1];
    
            const margin = {top: 75, right: 30, bottom: 75, left: 80}; // Adjusted left margin for larger y-axis labels
            const width = 900 - margin.left - margin.right;
            const height = 700 - margin.top - margin.bottom;
    
            const svg = d3.select("#chart")
                .append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform", `translate(${margin.left},${margin.top})`);
    
            const x = d3.scaleBand()
                .domain(years)
                .range([0, width])
                .padding(0.1);
            svg.append("g")
                .attr("transform", `translate(0,${height})`)
                .call(d3.axisBottom(x)
                    .tickFormat(d3.format("d")))
                .selectAll("text")
                    .style("text-anchor", "middle")
                    .style("font-size", "14px"); // Increased font size for x-axis labels
    
            const y = d3.scaleLinear()
                .domain([0, 100])
                .range([height, 0]);

            svg.append("g")
                .call(d3.axisLeft(y))
                .selectAll("text")
                .style("font-size", "14px");
                
            // Major grid lines at every 10%
            svg.selectAll("majorGrid")
                .data(y.ticks(10)) // Generate 10 ticks
                .enter()
                .append("line")
                .attr("x1", 0)
                .attr("x2", width)
                .attr("y1", d => y(d))
                .attr("y2", d => y(d))
                .attr("stroke", "gray")
                .attr("stroke-width", 0.5);
                
            // Minor grid lines at every 5% (excluding those that coincide with major grid lines)
            svg.selectAll("minorGrid")
                .data(y.ticks(20).filter(tick => tick % 10 !== 0)) // Generate 20 ticks but filter out the major grid lines
                .enter()
                .append("line")
                .attr("x1", 0)
                .attr("x2", width)
                .attr("y1", d => y(d))
                .attr("y2", d => y(d))
                .attr("stroke", "gray")
                .attr("stroke-width", 0.5)
                .style("stroke-dasharray", ("3, 3")); // Dotted style                
    
            svg.append("text")
                .attr("text-anchor", "middle")
                .attr("x", width / 2)
                .attr("y", height + 50)  // Adjusted y position of x-axis title
                .text("Years (2000-2020)")
                .style("font-size", "16px");
    
            svg.append("text")
                .attr("transform", "rotate(-90)")
                .attr("y", -60)
                .attr("x", -height / 2)
                .attr("text-anchor", "middle")
                .text("Percentage (%) of Total Population Using the Internet")
                .style("font-size", "16px");
    
            svg.append("text")
                .attr("x", width / 2)
                .attr("y", -30)
                .attr("text-anchor", "middle")
                .style("font-size", "20px")
                .style("font-weight", "bold")
                .text(`Percentage (%) of Total Population in ${country} Using the Internet (2000-2020)`);
    
            svg.selectAll(".bar")
                .data(years.map((y, i) => { return {year: y, value: percentages[i]} }))
                .enter()
                .append("rect")
                .attr("class", "bar")
                .attr("x", d => x(d.year))
                .attr("y", d => y(d.value))
                .attr("width", x.bandwidth())
                .attr("height", d => height - y(d.value))
                .attr("fill", d => "steelblue") // Use red for 2020, otherwise blue
                .on("mouseover", function(event, d) {
                    // Change fill color on hover
                    d3.select(this).transition()
                        .duration(100)
                        .attr("fill", d.year === 2020 ? "maroon" : "darkblue");
            
                    // Append text for all bars
                    svg.append("text")
                        .attr("class", "val") // Add class for easy removal
                        .attr("x", x(d.year) + x.bandwidth()/2)
                        .attr("y", y(d.value) - 5)
                        .attr("text-anchor", "middle")
                        .text(d.value + "%");
            
                    // Additional tooltip for 2020
                    if (d.year === 2020) {
                        const covidText = "COVID-19";
                        const letters = covidText.split('');
                        letters.forEach((letter, index) => {
                            svg.append("text")
                                .attr("class", "tooltip-covid") // Specific class for COVID-19 tooltip
                                .attr("x", x(d.year) + x.bandwidth()/2)
                                .attr("y", y(d.value-10) + (15 * index) - 20) // Space out letters vertically
                                .attr("text-anchor", "middle")
                                .style("fill", "white")
                                .style("font-size", "15px")
                                .text(letter);
                        });
                    }
                })
                .on("mouseout", function(d) {
                    d3.select(this).transition()
                        .duration(100)
                        .attr("fill", "steelblue");
            
                    // Remove the text and tooltip on mouseout
                    d3.selectAll(".val").remove();
                    d3.selectAll(".tooltip-covid").remove();
                });

        } else {
            const svg = d3.select("#chart")
                .append("svg")
                .attr("width", 900)
                .attr("height", 700);
            svg.append("text")
                .attr("x", 450)
                .attr("y", 350)
                .attr("text-anchor", "middle")
                .style("font-size", "24px")
                .style("font-weight", "bold")
                .text("No data available. Please enter a valid country.");
        }
    }       
    
    // Modified to only fill the textbox and not automatically update the chart
    function fillInputAndWait(countryName) {
        document.getElementById('countryInput').value = countryName;
        document.getElementById('suggestions').style.display = 'none';
        // Show the reminder message
        document.getElementById('reminder').style.display = 'block';
    }    
    
    function filterCountries() {
        const input = document.getElementById('countryInput');
        const filter = input.value.toUpperCase();
        const suggestions = document.getElementById('suggestions');
        suggestions.innerHTML = '';
        suggestions.style.left = input.getBoundingClientRect().left + 'px'; // Position the dropdown directly below the input
        suggestions.style.top = (input.getBoundingClientRect().top + input.getBoundingClientRect().height) + 'px'; // Ensure it's right below the input
    
        if (!filter) {
            suggestions.style.display = 'none';
            return;
        }
    
        const keys = Object.keys(data);
        const filteredKeys = keys.filter(key => key.toUpperCase().startsWith(filter));
    
        filteredKeys.forEach(function(country) {
            const div = document.createElement('div');
            div.innerHTML = country;
            div.style.padding = '10px';
            div.style.cursor = 'pointer';
            div.onmouseover = function() { this.style.backgroundColor = '#f0f0f0'; }; // Change background on hover
            div.onmouseout = function() { this.style.backgroundColor = '#fff'; }; // Revert on mouse out
            div.onclick = function() {
                fillInputAndWait(country);
            };
            suggestions.appendChild(div);
        });
    
        if (filteredKeys.length > 0) {
            suggestions.style.display = 'block';
        } else {
            suggestions.style.display = 'none';
        }  
    }