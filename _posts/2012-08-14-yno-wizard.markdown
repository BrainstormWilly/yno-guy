---
title:  "Yno Wizard"
date:   2012-08-14 09:00:00
categories: [Portfolio]
excerpt: <img src="images/logo_lockup.png" class="portfolio-thumbnail-image" align="left">Way back in 2012 there were only a few wine apps of any value. I thought I could do better. With very little resources to work with I relied on 3rd party APIs to gather wine data and Facebook to store it. I released the Yno Wizard for Android in April of 2012. My goal was to create an app that would help wine consumers shop, rate, and store wines they liked. The Wizard could scan wine label barcodes and immediately see online pricing as well as descriptions and ratings. In addition, users could rate the wine and store it on their Facebook timeline.
tags: []
---
![Yno Wizard](/images/logo_lockup.png){:class="portfolio-hero-image"}

Way back in 2012 there were only a few wine apps of any value. I thought I could do better. With very little resources to work with I relied on 3rd party APIs to gather wine data and Facebook to store it. I released the Yno Wizard for Android in April of 2012. My goal was to create an app that would help wine consumers shop, rate, and store wines they liked. The Wizard could scan wine label barcodes and immediately see online pricing as well as descriptions and ratings. In addition, users could rate the wine and store it on their Facebook timeline.

## Lies and Shelf Talkers
Even seasoned wine experts can only identify a fraction of the brands they see in a store. Without any kind of guide, how can anyone be sure they're paying a fair price? How is the wine made? What do the experts say? Sure, some wines have info on the label or shelf talkers, but that's all marketing.

> The Wizard was designed to aide consumers in getting objective pricing and information on any wine in the marketplace.

## Feature Richness
The Yno Wizard used 4 different APIs to gather information including Google's Shopping API to get online pricing information. With each barcode scan, the Wizard would instantly pull up the latest details on any publicly available wine. It would algorithmically sort through the data to feature the most pertinent info. If a user was actually tasting a wine, they could rate it with the rating system of their choice and store the wine on their Facebook timeline publicly or privately for permanent record.

<img src="{{ "/images/Screen Shot 2012-08-14 at 2.43.16 PM.png" | prepend: site.baseurl }}" alt="Yno Wizard" width="250">
<img src="{{ "/images/Screen Shot 2012-08-14 at 3.03.25 PM.png" | prepend: site.baseurl }}" alt="Yno Wizard" width="250">
<img src="{{ "/images/Screen Shot 2012-11-02 at 4.28.55 PM.png" | prepend: site.baseurl }}" alt="Yno Wizard" width="250">
<img src="{{ "/images/Screen Shot 2012-11-02 at 4.29.13 PM.png" | prepend: site.baseurl }}" alt="Yno Wizard" width="250">

## Software
* Java
* Android SDK

This app is no longer available. The original website is at [ynowizard.com](http://ynowizard.com). It used the following dependencies:

* [Google Zebra Crossing Barcode Scanning API](https://github.com/zxing/zxing)
* Google Shopping API (no longer publicly available)
* Vintank API (no longer available)
* [Wine.com API](https://api.wine.com/)
* [Snooth.com](https://api.snooth.com/)

## Developer Notes
* [Github](https://github.com/BrainstormWilly/YnoWizard)
* [Website](http://ynowizard.com)

In 2012 it was clear my Flash career was coming to an end. I decided to investigate mobile development and the Yno Wizard was my first real project. A little ambitious, but I completed it in 4 months. It worked brilliantly largely thanks to Google's shopping API. However, as it is with apps, I had difficulty promoting it and getting user traction. To confuse matters, the shopping feature was so effective users were scanning/shopping non-wine items. Before I could react, Google closed down the shopping API for public use and crippled the app for good.

Developing the Wizard raised a lot of questions in my mind about the wine industry. The barcode scanner would sometimes pull up the wrong wine or vintage. I had to write a lot of parsing algorithms to display wine consistently. The experience inspired me to learn more and ultimately, I got a job in the wine business. 5 years later and now a wine data analyst, I see what I was up against every day in granular detail. Despite my naiveté, I'm proud of what I accomplished in those 4 months.
