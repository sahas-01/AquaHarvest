# **<div align="center">Marine Farms</div>**  

## Problem statement
Fish farming involves the commercial farming of fish, usually for food, in artificial enclosures such as fish tanks or fishponds. Aquaculture is a rapidly growing industry due to increasing global demand for
fish and seafood, and also as it helps to sustain wild fish populations, protect biodiversity and also provide jobs to rural communities. However, the growth of this industry also has it's own set of challenges such as environmental concerns and sustainability. The industry must balance its growth with the need to protect aquatic ecosystems and wild fish populations. Fisheries in India play a significant role in the economy, particularly in creating employment opportunities in rural areas. The sector has a wide range of possibilities for growth. Prior to India's independence, fisheries were not considered as a major contributor to the economy but since independence, the importance of fisheries and agriculture as income generating sectors has been acknowledged.


## Project Description

Objective: Promote fish farm cultivation in a sustainable manner thereby maximizing profits

Target Customers: Local Fish farmers

- Create a platform for a new individuals to start fish farm cultivation from scratch and earn a livelihood selling fish produce and also for existing farms to simplify their daily work.
- The platform will have both farmer and customer side, primarily focussed on the farmer side.
 
## For the seller:
- When they first logs in, if they don't have a tank yet, we'll show them resources and initial set of guidelines/curated training videos showing the benefits of fish farm cultivation,
	probable subsidies available, and ways to get started by choosing a fish, their feed etc.
- Else, we'll get the details of the tank and the fish in it.
- Use our API to fetch data showing the popular fishes available near the locality
	It doesn't matter if the particular fish is not suitable for the user's weather. That part would be shown in the knowledge base section if they decide to go forward with that idea itself.
- Once the user has decided to go forward with the approach and have decided the fishes they are ready to cultivate , we let them create an account in our app so as to track their progress. This way, they are encouraged to use our app as this would help solve a lot of their problems.
- Details like the tank name, the number of fishes in each tank etc are collected. We also show them popular sensors they can use and we offer to help them by installing the sensors and collecting data and having them be displayed in a Dashboard format.
- This would let them monitor various levels in their tank like pH level, Ammonia Level, temperature etc.
- Based on the fish data entered, we could provide notifications, alerts etc (eg: Breeding time will be reaching your fish, so do this.)
- Following these advice, the farmer should, in theory by now have a working fish farm which was started from scratch with us providing all curated resources and free installation of sensors and monitoring in our platform
- Now it's time for the farmer to make money off of their hard work. Once the cultivation has been completed, the farmer is prompted to add their produce to our marketplace.
- We'll show subsidies they can avail for various activities.

<img src = "https://ars.els-cdn.com/content/image/1-s2.0-S2352340920313391-gr26.jpg">

## For the buyer who would like to have fresh farm products

- Consider swiggy for fresh marine farm products
- The buyer can (log in and ) use our marketplace and search for a particular fresh fish produce near them
- This will show all the marketplaces selling this product near them.
- There will be a way to make orders from our app to this farmer
- Based on this order, the seller can deliver the produce to the buyer

## Our offerings
- No installation charges for sensors
- Our app offers features like monitoring and timely alerts
- Once they have started reaching a state for selling fishes, we offer visibility in our marketplace
- Basically everything to get one started with fish farm cultivation from scratch and make a living. These are our costs

## Revenue Model
- Can add max 2 tanks in free version
- Can connect max 3 sensors under free version in each tank. (Cost of sensor born by seller).
- Can provide transportation via marketplace under paid plan

## Incentive for farmers to continue use our app once they get habituated
- Visibility in our platform for even further growth as opposed to a constant set of customers they initially get
- The sensors are already connected and monitoring is already being done using our platform
- We offer transportation facility to customers from afar which may be very difficult for new farmers to provide, but is a very good way to attract new customers with our premimum plan.



## Tech Stack
- ReactJS, MaterialUI (Frontend)
- NodeJS, ExpressJS (Backend)
- MondodB (Database)
	
## Assumptions & References

- Assumption that people like fresh fish based on statistics.
- The ranges for readings of ph and temperature are reffered from https://www.researchgate.net/publication/334091423_IoT_Based_Automated_Fish_Farm_Aquaculture_Monitoring_System
- The range for ammonia readings are reffered from https://sciforum.net/paper/download/8044/manuscript 
- The harvest cycle for fishes are reffered from 
	- https://thefishsite.com/articles/cultured-aquatic-species-mrigal-carp
	- https://thefishsite.com/articles/cultured-aquatic-species-catla-catla
	- https://nfdb.gov.in/PDF/E%20Publications/12%20Package%20of%20Practices_Breeding%20&%20Culture_Freshwater%20Fish%20Species_October2018.pdf
- The recommended manuring details are from https://farmer.gov.in/imagedefault/handbooks/BooKLet/NAGALAND/20170517165644_fish%20pond.pdf
- The Subsidy that can be availed is referred from https://dahd.nic.in/related-links/centrally-sponsored-scheme-development-inland-fisheries-and-aquaculture
- Popular fish to be grown in a particular obtained by webscraping https://www.freshtohome.com/
