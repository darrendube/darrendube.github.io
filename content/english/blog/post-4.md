---
title: Making decisions from dirty data can have disastrous outcomes
date: 2022-06-18
tags: ["Data Science"]
image: "images/data-clean.png"
draft: true
---


In 2016, Microsoft released [Tay](https://en.wikipedia.org/wiki/Tay_(bot)), an AI chatbot designed to interact with Twitter users, answering their questions, and learning from users' replies. Unlike the other chatbots of the time, however, Tay was meant to have a personality, and to have a sense of humour, engaging in “casual and playful conversation”.

Yet, in a few hours of release, the conversations were somewhat less “playful”:

![1](https://i.guim.co.uk/img/media/59900576343e3eb9c228925499c3d03a76b3a7cd/16_0_973_584/master/973.jpg?width=700&quality=85&auto=format&fit=max&s=66da60a6ab8773cb32b849774d9f0ff1 "Source: guardian.com")

![2](https://cdn.vox-cdn.com/thumbor/2DeadAHIDntdAXPA3PmhSS4truo=/0x0:628x308/1200x0/filters:focal(0x0:628x308):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/6238309/Screen_Shot_2016-03-24_at_10.46.22_AM.0.png "Source: theverge.com")

![3](https://digmedia.lucdh.nl/wp-content/uploads/2019/12/s3-tay_twitter_bot_microsoft-default-597.png "Source: lucdh.nl")

By 4 am the next day Microsoft had shut down Tay – only 16 hours after it had launched.

Microsoft may have had a great idea. Tay was meant to learn from its interactions, becoming more advanced with each interaction with a user. But they seemingly didn’t account for one crucial thing – **the data itself may be bad**.

But dirty data is not just hate speech, or outliers. It’s more than that. And understanding how to clean data is essential to ensure your data tells an accurate story

## What is dirty data

Microsoft’s chatbot fell prey to data bias, a problem most AI and predictive systems are affected by. If the dataset used to train an AI excludes certain groups, or has inherent societal biases, these systems may exacerbate societal biases.

Think of the infamous [Titanic dataset](https://www.kaggle.com/c/titanic). Within a few minutes of Exploratory Data Analysis, you would realise that females were **vastly** more likely to survive than men. If a travel insurance firm trained its system using the Titanic dataset, it would charge men markedly higher premiums than women. With that, a system meant to assess risk based on the destination of travel and number of people travelling, instead assesses risk based on gender.

This may sound hypothetical, but [banks have been charging, on average, higher interest rates](https://www.deseret.com/2012/4/3/20500723/racism-in-finance-major-banks-issue-higher-interest-rates-to-minorities) to people of colour. This may have been caused, in part, by AI systems that consider black borrowers riskier.

## How to (try) clean dirty data

It’s true that data will never be clean – it will always have some level of bias and error, but by systematically evaluating the source, freshness, and attributes of the data being collected, bias and error can be reduced considerably.

But how can this be done? To borrow from Kathy Baxter’s [very good article](https://medium.com/salesforce-ux/dirty-data-or-biased-data-6d55db6b5dc6): We can evaluate the correctness of data by asking 4 W’s – [Where](#where--is-your-data-source-credible), [When](#when--is-your-data-source-recent), [Who](#who--is-your-data-source-representative), and [What](#what--could-the-data-categories-you-are-analysing-have-an-inherent-bias)?

#### WHERE – Is your data source credible?

The quality of your data is very important, and so it is crucial to consider where your data comes from. Could that source have a vested interest in having the data be a certain way? Might they have tweaked the data? It is very important that you get your data from a trusted, credible source.

If you’re collecting the data yourself: **have you followed the proper procedures for collecting data systematically?** Could the sample you collected the data from introduce bias into the data? These are all very key considerations to make your data credible.

If you’re starting out in Data Science and are looking for credible, real-world datasets, public datasets from The [World Bank](https://data.worldbank.org/), [Google](https://www.google.com/publicdata/directory), and the [US Census Bureau](https://www.census.gov/data.html) will do the job.

#### WHEN – Is your data source recent?

You’ve probably heard that [the total amount of data in the world doubles every two years](https://medium.com/callforcode/the-amount-of-data-in-the-world-doubles-every-two-years-3c0be9263eb1). It’s an incredible statistic, but one of the problems with this is that there is way more data about the recent past than the more distant past.

For example, a stock trading bot maker would have way more information about the movements in the stock market in the last month, than they would have of 5 years ago.

This phenomenon is called **[recency bias](https://www.investopedia.com/recency-availability-bias-5206686)**, and while it can make your AI system good at finding short-term trends, it may falter on the more long-term, bigger-picture trends.

However, the opposite is also true: a medical insurance firm making decisions based on data collected 5 years ago may not take into consideration the COVID-19 pandemic we’re still in the midst of.

You will need to take into account the recency of your data, and decide if it is appropriate for your particular use case.

#### WHO – Is your data source representative?

Your dataset needs to be representative of your target users/customers. For example, if an insurance firm was targeting European clients, it would not make sense to train their system with a dataset of American customers.

But it’s not often that easy to know if your dataset is representative:

People of colour have [historically been underrepresented in clinical trials](https://www.webmd.com/a-to-z-guides/news/20220505/why-do-clinical-trials-still-underrepresent-minorities). While the COVID-19 vaccine trials were markedly more diverse, this was still observable. This was not intentional – hospitals typically found in POC neighbourhoods tend to be underfunded and therefore unable to conduct trials. Pharmaceutical companies also accounted for age in these trials. Even though people over the age of 65 make up just 9% of the US population, they are vastly more likely to die of COVID-19. Pharmaceutical companies have therefore included a disproportionate amount of older people in vaccine trials.

#### WHAT – Could the data categories you are analysing have an inherent bias?

Data categories are the different **pieces of information** or **variables** you are analysing - things like name, age, or location. Choosing what data categories to include is important because the presence of certain variables could introduce bias into your dataset.

Due to certain laws, or organizational values, certain attributes are restricted:

-	Age
-	Race
-	Gender
-	National origin
-	Sexual orientation

These variables are prohibited in certain contexts like **employing people** or providing **government services**. Organisations tend to avoid them because they tend to introduce unwanted bias. It is generally advisable to stay away from these attributes unless your use case is specifically linked to them (e.g. for research purposes).

***


It is true that data will never be clean, but that doesn’t mean it can’t still be useful.

To quote Dean Abbott, “No data is clean, but most is useful.”

So, go on and make your data useful! (after cleaning it)

