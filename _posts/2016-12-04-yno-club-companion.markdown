---
title:  "Yno Club Companion"
date:   2016-12-04 09:00:00
categories: [Portfolio]
excerpt: Do you know a “cruiser?” A cruiser is someone who frequently goes on cruise ship vacations. After working in wine hospitality for 3 years I came up with the term <em>clubbers</em>. Clubbers are people who belong to 2 or more wine clubs. I've met individuals who belong to as many as 7! And all clubbers have the same complaint–managing all their club accounts. So naturally, I set out to develop a software to solve that problem.
tags: []
---

Do you know a “cruiser?” A cruiser is someone who frequently goes on cruise ship vacations. After working in wine hospitality for 3 years I came up with a new term: _clubbers_. Clubbers are people who belong to 2 or more wine clubs. I've met individuals who belong to as many as 7! And all clubbers have the same complaint: managing all their club accounts. So naturally, I set out to develop a software to solve that problem.

## So Many Accounts, So Much Bother
Wine clubbers all face the same dilemma. The more clubs they join, the more accounts there are to manage. Each with it's own website, username, password, shipping schedules, events, etc.. Every time a clubber wants to change an address or credit card it becomes a major undertaking. Then there's the shipping. Most wine clubs ship 2-4x a year...but which months? Since alcohol requires an adult signature clubbers become slaves to their homes waiting for their wine shipments. Ask any winery, clubbers are there best customers, so why do they make it so hard?

> Since 70% of all wineries use less than 5 CRM systems, I figured there must be a way to integrate clubber accounts.

![Yno Club Companion Schematic](images/Screen Shot 2017-08-22 at 10.36.02 PM.png)

## How It All Comes Together
In most wine clubs each member has an online account. For each membership YCC becomes a sort of omniauth for all accounts and accesses each CRM system's API to get/update information. Since YCC is an app, users can set notifications for upcoming club shipments and events for all their membership accounts. Since most wine CRM systems are tied directly to UPS and FedEx accounts, users should be able to control their shipments so that they arrive in the same timeframe. YCC also offers a feature where users can change and address or credit in one place to update all their accounts. With YCC _clubbers_ will no longer feel confined by their wine club account management.

## Software
* Ruby-on-Rails v5
* Bootstrap v3

This project is in-progress and being built as a proof-of-concept for winery CRM software providers. There is currently no demo.

## Developer Notes
* [Github](https://github.com/BrainstormWilly/WineClubCompanion)

This was my back-end capstone project at [Bloc.io](http://bloc.io). The project was inspired by my 3 year experience in wine hospitality. Often times I would hear from customers, "I love your wines." To which, being the astute salesman, I would counter, "Then, you should joining our wine club." I was surprised by how many times the reply would be, "I can't, I already have too many shipments to deal with." I was surprised to find in more cases than not the additional cost of another club was less of a problem than managing it‘s logistics. This project was too ambitious in scope for the time alotted, but I intend to circle back and complete this proof-of-concept as I think it has serious market potential.
