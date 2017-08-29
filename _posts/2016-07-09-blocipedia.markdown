---
title:  "Blocipedia"
date:   2016-07-09 08:00:00
categories: [Portfolio]
excerpt: <img src="images/wiki.jpg" class="portfolio-thumbnail-image" align="left">A Wikipedia-inspired clone, this was a back-end Ruby project I did in Bloc.io. In this project I learned a lot about user authentication and authorization using Ruby Gems Devise and Pundit. In addition, I got to play some more with Stripe’s API. All of this while come in handy in developing my Yno Club Companion.
tags: []
---

![Blocipedia](/images/wiki.jpg){:class="portfolio-hero-image"}

A Wikipedia copy, this was a back-end Ruby project I did in Bloc.io. In this project I learned a lot about user authentication and authorization using Ruby Gems Devise and Pundit. In addition, I got to play some more with Stripe’s API. All of this while come in handy in developing my Yno Club Companion.

## Admins, Subscribers, Users, Oh My!
A freemium wiki service is much more challenging than it looks. Building CRUD for the wikis themselves was pretty straight-forward. Protecting access to the right users was not. Most of work as a Flash developer were free to the public. Even when they had logins, my participation was minimal. In this project I had to provide access to multiple user levels, as well as protect the app from various kinds of session hacks.

> Building a wiki is not easy. Building a secure app with multiple user roles is much harder.

## Devise and Pundit to the Rescue
From the beginning, I was advised to load gems Devise and Pundit. While Pundit was a definite timesaver, Devise is truly magical. When you deep dive into how it works and view the code it produces, its a wonder that anyone rolls their own authentication code. This app has 3 user roles which have different access. In addition, it uses Stripe’s API to collect payment for premium features. For extra credit, I added markdown editing with the Redcarpet gem. The result is a pretty functional—and unhackable—wiki clone.

## Software
* Ruby v4
* Bootstrap v3
* Devise gem
* Pundit gem
* Redcarpet gem
* Stripe API

## Developer Notes
* [Github](https://github.com/BrainstormWilly/blocipedia)
* [App](https://arcane-atoll-89530.herokuapp.com/)

I learned with this project there are a lot of ways to hack a user session. I also gained confirmation on the importance of unit testing. When you add up all the different combinations of user/access combinations Rspec becomes an invaluable tool to keep them straight. Of all the projects I did at Bloc.io, this was one of the most valuable in regards to real world applications.
