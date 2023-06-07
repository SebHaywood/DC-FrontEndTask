# DC-FrontEndTask
Front End Task for Digital Culture
Author: Seb Haywood

My approach to this task was to minimise JS data changing to just values. This meant creating null value place holder divs and boxes that will become visible and house data on successful fetch requests.

The fetch request itself was straightforward. The challenge here which took a few second guesses was accessing the language and currency data as this data was further nested objects referenced with unique names for example Euro would be indexed with EUR which obviously is not the data we require.

Most of the CSS was pretty straightforward taking advantage of transition automation, grid and flex display types as then mostly positioning.
I believe this to be accurate to the design with the exception of responsive choices that had to be made, for example, text size when approaching mobile viewports.

If I had additional time I would like to refine the animations as well as footer positioning, responsive detailing and perhaps a more interactive search bar. My immediate thoughts would be to have two API calls, one to fetch all country names to generate a drop-down list. Then a second call to target selected countries, this I feel would minimise user error on country selection.

To view this contribution, please visit: https://sebhaywood.co.uk/DC-task/
To view the repo for this task, please visit: https://github.com/SebHaywood/DC-FrontEndTask

Feel free to contact me if there's anything I've overlooked.

Thanks again for the opportunity!

07/06/2023
- Added clear search button functionality
- Absolute bottom positioning on footer
- Added stylistic background animation so background gradient now transitions left and right smoothly
- Added hover effect drop shadow to search bar
- Added hover effect drop shadow and x-translate animation to search results info boxes (details & flag)
- Fixed error and display elements from pushing div structure by toggling display hidden/block relatively