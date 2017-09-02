---
title:  "Secret Santa"
date:   2016-11-26 08:00:00
categories: [Portfolio]
excerpt: <img src="images/secretsanta.jpg" class="portfolio-thumbnail-image" align="left">My family traditionally does secret Santa. Trouble is, we all live in different locations, so its hard for us to secretly distribute giftees to their giftors. So naturally, I set to creating an app. Seemed easy enough, but my family is not entirely trustworthy. To make sure there was no cheating, rather than show them their giftee on a website, I used the <a href="https://www.twilio.com" target="_blank">Twilio</a> gem to text it to them.
tags: []
---
![Yno Wine Trivia](/images/secretsanta.jpg){:class="portfolio-hero-image"}

My family traditionally does secret Santa. Trouble is, we all live in different locations, so its hard for us to secretly distribute giftees to their giftors. So naturally, I set to creating an app. Seemed easy enough, but my family is not entirely trustworthy. To make sure there was no cheating, rather than show them their giftee on a website, I used the Twilio gem to text it to them.

## Something So Simple
I originally built a PHP/MySQL version that simply displayed the giftee once the giftor selected their name. Problem was, some people forgot what they saw and others chose the wrong name. In Nov 2016 I was nearly finished with the back-end program at Bloc and decided to tackle something would text the giftee to the user’s mobile phone.
Seemed like a good time to exercise some RoR skills.

> My family is untrustworthy, <br/>so I needed a full-proof Secret Santa app

## Successful Christmas
I was able to hack out a new app and send it out to the family in some spare time over Thanksgiving weekend. The Twilio gem was easy to install and, thanks to Rspec, worked well right out of the box. I’m happy to report there was no cheating or issues in 2016 for secret Santas.

## Software
* Ruby-on-Rails v4
* Bootstrap v3
* [Twilio](https://www.twilio.com)

## Developer Notes
* [Github](https://github.com/BrainstormWilly/Xmas_Pickem)
* [App](https://fathomless-earth-31410.herokuapp.com/)

If you know Ruby-on-Rails feel free to fork my app. You will have to get a Twilio account which is a pretty cheap pay-per-use model.
