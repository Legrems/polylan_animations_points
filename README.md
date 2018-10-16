---
# This repository is for version 1.x of the application.
---

# PolyLAN Animations Points

### Languages
 - Python 3 support
 - Google script support for google sheet

## Formula
![](http://latex.codecogs.com/gif.latex?%5Clog%5F%7B25%7D%5Cbig%28number%5F%7Bteam%7D%5Ccdot%5Cfrac%7Bplayer%5F%7Bperteam%7D%7D%7B2%7D+15+player%5F%7Bperteam%7D%5Cbig%29%5Ccdot%5Clog%5F%7B1.05%7D%5Cbig%281+duration%5E2%5Cbig%29%5Ccdot%5Cfrac%7B100%7D%7B90+10%5Ccdot%A0player%5F%7Bperteam%7D%7D%5Ccdot%5Cexp%5Cbig%5B%5Cfrac%7B%2D1%7D%7B4%7D%5Ccdot%5Cbig%28%28pos%2D1%29%5Ccdot%5Csqrt%7B%5Cfrac%7B16%7D%7Bnumber%5F%7Bteam%7D%7D%7D+5%5Cbig%29%5Cbig%5D)

## Parameters
### pos
This is the position of the player, must be between 1 and number_team, else return 0.
### numberEgality
When the animation allows it, it can be some egality. So the calculation method change the way will the points be calculated
### duration
Duration of the animation, in hour.
### number_team
The number of team active in the animation.
### player_per_team
The number of player per team. For exemple, 5 for lol, 6 for OW, ...
### calculation_method
There are 3 choices here :
 - "AVG"
 - "MAX"
 - "MIN"