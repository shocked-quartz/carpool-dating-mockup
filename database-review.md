

Schema thoughts
- Users have a ton of fields
- Can conversations only happen inside Requests?
    - What is a Request? It sounds like a friend request, but is it something else?
    - If it is a friend request, can you keep talking to someone after you accept the request?
    - If not, should that be fixed?
- Why can users have more than one account? What does a user represent?
    - Is this functionality testing-only or admin-only?
    - If so, is this a vulnerability? Should this be fixed?
- Should users only be able to join one carpool group? What if their one carpool group only drives 3 days/wk?

Improvements
- Add a Location model that has an address, lat coord and long coord
    - Also include POI fields
    - This will reduce 12 user fields to just 2
    - Improves readability
    - Reduces code duplication, allows for abstraction later down the line
- Change User.carpool from CarpoolGroup? to CarpoolGroup[]
    - Allows users to join multiple carpool groups
    - Create a WeekDay enum
    - Change User.daysWorking from String to WeekDay (unless that's not what daysWorking is, then add a new field)
    - Add a WeekDay[] field to CarpoolGroup called carpoolDays that represents the days driving
    - Either:
        - Base CarpoolGroup on who the driver is, and change CarpoolGroup.carpoolDays from WeekDay[] to Weekday[][]
        - Base CarpoolGroup on a specific set of Users, and change User.seatAvail from Int to Int[5]
