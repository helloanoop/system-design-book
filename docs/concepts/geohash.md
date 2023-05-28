# GeoHash

Geohash is a geographic coordinate system that provides a way to encode and represent a specific location on the Earth's surface using a short alphanumeric string. It is a hierarchical spatial data structure that divides the Earth into a grid of rectangular regions, and each region is identified by a unique geohash string.

The geohash algorithm converts latitude and longitude coordinates into a string of characters using a base-32 encoding scheme. The resulting geohash string represents a specific area on the Earth's surface. The longer the geohash string, the more precise the location it represents.

Geohashes have several useful properties. Firstly, similar locations have similar geohash strings, so nearby areas will have similar prefixes in their geohash representation. This property allows for efficient indexing and searching of geographic data. Secondly, the length of the geohash string can be adjusted to balance precision and granularity. Shorter geohashes represent larger areas, while longer geohashes provide more precise location information.

In my search on youtube, I found these two excellent videos on understanding geohash.
1. [Geohash: the algorithm inside and out - Part 1](https://www.youtube.com/watch?v=vGKs-c1nQYU)
2. [Geohash: coding from scratch - Part 2](https://www.youtube.com/watch?v=ASLPkpKKCw4)

### Hash length
A geohash can have varying lengths depending on the desired precision of the location. Each additional character in the geohash string increases the precision of the location by dividing the area into smaller sub-regions.

Typically, geohash strings range from a minimum length of 1 character to a maximum length of around 12 characters. 
| Characters | Description                              | Distance              |
|------------|------------------------------------------|-----------------------|
| 1          | Large area like a country or continent   | ≤ 5,000km X 5,000 Km       |
| 2          | Smaller region within a country          | ≤ 1,250km X 625km       |
| 3          | Larger region like a state or province   | ≤ 156km X 156km           |
| 4          | Smaller region or city                    | ≤ 39.1km X 19.5km     |
| 5          | Moderate-sized area like a city or town  | ≤ 4.89km X 4.89km                |
| 6          | Neighborhood or larger landmark          | ≤ 1.22km X 0.61km    |
| 7          | Smaller neighborhood or block            | ≤ 153m X 153m       |
| 8          | Specific location within a neighborhood  | ≤ 38.2m X 19.1m            |
| 9          | More precise location within a small area | ≤ 4.77m X 4.77m            |
| 10         | Very precise location within a small area | ≤ 1.19m X 0.596m |
| 11         | Extremely precise location within a small area | ≤ 149mm X 149mm |
| 12         | Extremely accurate location (specific building or point) | ≤ 37.2mm X 18.6mm |

### Example: Proximity Calculation for nearby hotels
A commonly used precision for in this case is around 6 to 8 characters.

Lets take example of [MakeMyTrip](https://economictimes.indiatimes.com/industry/services/hotels-/-restaurants/hotels-to-contribute-75-of-total-business-by-2020-makemytrip/articleshow/60244096.cms) which has 500k hotels on platform

Let's assume a simple table structure for storing this having fields `id`, `latitiude`, `longitude`, `geohash`, `hotel_id`
- **id**: Assuming the id column is an integer data type, it typically requires 4 bytes of storage.
- **geohash**: With a precision of 8, the geohash column will contain alphanumeric characters. Each character is typically stored as 1 byte in PostgreSQL, so the geohash column will require 8 bytes.
- **latitude**: Assuming the latitude column is stored as a double precision floating-point number, it requires 8 bytes.
- **longitude**: Assuming the longitude column is stored as a double precision floating-point number, it requires 8 bytes.
- **hotel_id**: Assuming the hotel_id column is an integer data type, it typically requires 4 bytes of storage.

Considering these estimates, the total size for each row in the table would be:

4 bytes (id) + 8 bytes (geohash) + 8 bytes (latitude) + 8 bytes (longitude) + 4 bytes (hotel_id) = 32 bytes per row

32 bytes/row * 500,000 rows = 16,000,000 bytes = 16 MB (approximately)