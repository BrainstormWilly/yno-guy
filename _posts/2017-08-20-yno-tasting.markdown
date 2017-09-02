---
title:  "Yno Tasting"
date:   2017-08-20 21:00:00
categories: [Portfolio]
excerpt: <img src="/images/yno_tasting_logo_512.png" class="portfolio-thumbnail-image" align="left">If you want to learn more of what you like about wine and make better buying choices, do what the pros do, taste wine blind. Yno Tasting is a platform that helps hosts taste wines with friends. YT helps create your party, invite guests, and record their ratings and comments via mobile devices or Alexa. YT makes it easy and fun to discover your wine palate!
tags: []
---

![Yno Tasting](/images/yno_tasting_logo_512.png){:class="portfolio-hero-image"}

If you want to learn more of what you like about wine and make better buying choices, do what the pros do, taste wine blind. Yno Tasting is a platform that helps hosts taste wines with friends. YT helps create your party, invite guests, and record their ratings and comments via mobile devices or Alexa. YT makes it easy and fun to discover your wine palate!

## Why Taste Wine Blind
Choosing a wine is confusing for most consumers. As a wine educator, I have encountered many questions from frustrated tasters about how to learn more about wine. The many brands, experts, and point systems don't help matters much. The fact is wine is subjective. Every person's palate is different and every situation demands a different wine. The answer to choosing a wine is simple: taste more wine. However, any preconceptions about how good a wine is, it's rating, price, production, can skew one's decision making. The only way to objectively understand your wine palate is to taste it blind. Blind comparison tastings are how wine pros develop their own palate.

> The Yno Tasting platform makes it easy for anyone to host/attend blind wine tastings and record their results.

## How it Works
YT users are divided into 3 groups: tasters, guests, and hosts. Become a taster by simply signing up. Become a guest by attending a tasting you've been invited to. Become a host by providing more information to host tastings. YT is a complete platform that allows hosts to create tasting events and invite other tasters or users outside the system.

Tastings are made up of 6 wines where each guest rates each one on a simple 1-5 scale. YT records each rating and displays the results once the tasting is complete. Ratings and comments are stored on [YnoTasting.com](https://ynotasting.com) for all tasters to review and chart their progress.

In the future, [YnoTasting.com](https://ynotasting.com) will offer complete guidelines on how to host a tasting, including theme, choosing wines, how to serve wines blind, and tasting guidelines. It will also show tasting trends and provide a taster “dashboard” for displaying personal stats.

<img src="{{ "/images/Screen Shot 2017-08-14 at 9.15.35 PM.png" | prepend: site.baseurl }}" alt="Yno Wizard" width="250">
<img src="{{ "/images/Screen Shot 2017-08-14 at 9.23.19 PM.png" | prepend: site.baseurl }}" alt="Yno Wizard" width="250">
<img src="{{ "/images/Screen Shot 2017-08-23 at 11.06.31 PM.png" | prepend: site.baseurl }}" alt="Yno Wizard" width="250">
<img src="{{ "/images/Screen Shot 2017-08-23 at 11.07.24 PM.png" | prepend: site.baseurl }}" alt="Yno Wizard" width="250">

## Software
* Ruby-on-Rails v5
* AngularJS v1.2

This project is in-progress. The current site at [YnoTasting.com](https://ynotasting.com) is a Ruby/Bootstrap prototype. The AngularJS version is in-progress. It utilizes third party dependencies including:

* [Devise](https://github.com/plataformatec/devise) for user authorization
* [Devise Token Auth](https://github.com/lynndylanhurley/devise_token_auth) for user authentication
* [Devise Invitable](https://github.com/scambra/devise_invitable) for tokenized user invitations
* [Doorkeeper](https://github.com/doorkeeper-gem/doorkeeper) for omniauth authentication
* [Alexa](https://developer.amazon.com/alexa) for user tasting interaction
* [SendGrid](https://sendgrid.com/docs/Integrate/Code_Examples/v2_Mail/ruby.html) for emailing invitations

## Developer Notes
* [Github](https://github.com/BrainstormWilly/yno-tasting-party)
* [Demo](https://ynotasting.com)

This was my front-end capstone project at [Bloc.io](http://bloc.io). However, I have been working on various versions of this software for almost 10 years. It was originally developed as a Flash/PHP project. I almost released it commercially until I calculated based on user observation that having computers at tasting parties was not always successful. Later I developed an AngularJS/PHP prototype that was mobilized with Boostrap 3. Mobile devices made user participation more seamless. Now, with the inclusion of Alexa, tasters will be able to more naturally rate wines than they did with pen and paper.
