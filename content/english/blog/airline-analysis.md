---
title: "Airline Recovery Post-COVID: Who Bounced Back and Why"
date: 2025-06-29
tags: ["Data Insights"]
image: "images/airport.jpg"
draft: false
---

The aviation industry was hit severely by COVID-19 in 2020 and 2021, with demand falling to about a third of what it was pre-pandemic.  In my analysis of airline performance in the post-recovery period of 2022/23, I found that **load factor** (how full planes were) and **aircraft utilisation** (how much each plane flew per day) were very strong drivers of profit as measured by Earnings Before Interest and Taxes (EBIT). Additionally, full-service and legacy airlines earned more profit coming out of the pandemic than less established or low-cost airlines. However, this does not imply that full-service or legacy airlines recovered to pre-pandemic profit levels faster than low-cost airlines, as pre-pandemic profit was not controlled for in this analysis.

*For the more statistically inclined, you may read my full analysis [here](https://nbviewer.org/github/darrendube/airline-profitability-analysis/blob/main/notebook.ipynb)*.

#### Big profits for full-service airlines - with a caveat

Low-cost carriers earned less profit, on average, than full-service carriers – about $462 million less. 

<iframe src='https://flo.uri.sh/visualisation/23998049/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:600px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe><div style='width:100%!;margin-top:4px!important;text-align:right!important;'><a class='flourish-credit' href='https://public.flourish.studio/visualisation/23998049/?utm_source=embed&utm_campaign=visualisation/23998049' target='_top' style='text-decoration:none!important'><img alt='Made with Flourish' src='https://public.flourish.studio/resources/made_with_flourish.svg' style='width:105px!important;height:16px!important;border:none!important;margin:0!important;'> </a></div>

It is important to note that this does not imply that full-service carriers recovered faster than low-cost carriers – this analysis only considered absolute profit levels and did not control for pre-pandemic profit levels. It also does not imply that low-cost airlines were less profitable than full-service airlines – again, because absolute profit levels, not a ratio, were used.

#### Experience Pays

Older airlines earned higher profit: each additional year of age resulted in an airline earning $7 million more. This is after controlling for the airline’s size as measured by the number of routes, and whether the airline was a low-cost carrier. 

<iframe src='https://flo.uri.sh/visualisation/23999474/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style='width:100%;height:600px;' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe><div style='width:100%!;margin-top:4px!important;text-align:right!important;'><a class='flourish-credit' href='https://public.flourish.studio/visualisation/23999474/?utm_source=embed&utm_campaign=visualisation/23999474' target='_top' style='text-decoration:none!important'><img alt='Made with Flourish' src='https://public.flourish.studio/resources/made_with_flourish.svg' style='width:105px!important;height:16px!important;border:none!important;margin:0!important;'> </a></div>

#### More routes, more profit?

A 1% increase in an airline’s number of routes was found to decrease profit by a couple of millions of dollars (keeping the other factors in the model constant). In fact, an initially positive relationship (before accounting for any other factors) was found to change to a negative one after controlling for these factors. Factors in the model that may have confounded the initial relationship are load factor (indicating that airlines with more routes may have lower average load factors), and aircraft utilisation (indicating that airlines that overutilised their aircraft may have experienced lower average load factors). As the world was still recovering from COVID in FY 2022/23, it was perhaps the case that certain destinations (e.g. more "ourdoorsy" vacation destinations) were more popular than others, and airlines that better capitalised on this by focusing on those routes could overcome the disadvantage of maintaining a smaller route network than larger airlines.

***

The results of this analysis suggest that, overall, operational efficiency (particularly in how often planes flew and how full they were) may have been more important than airline size or type in determining profit. However, this analysis was based on a non-random sample of 100 airlines, restricting the number of statistical tools available in this analysis.

For a more comprehensive explanation and walkthrough of my analysis, click [here](https://nbviewer.org/github/darrendube/airline-profitability-analysis/blob/main/notebook.ipynb).
