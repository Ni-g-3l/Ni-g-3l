---
title: "Use OVH domain with Google Workspace & Google Site"
date: 2024-03-25
description: "Here is the fastest way to redirect OVH domain to Google Site"
summary: "Here is the fastest way to redirect OVH domain to Google Site"
---

# How to

## 1. Add domain redirection from Google Workspace

From this [link](https://admin.google.com/u/1/ac/domains/manage) you can add a subdomain redirection to your from your OVH Domain.

![domain_manager_google_worksapce](domain_manager_google_worksapce.png)

![update_domain_redirect](update_domain_redirect.png)

## 2. Add A DNS records to OVH domain DNS Rules

Then Google Workspace will show you a list of IP adresses, that you need to register in your DNS zone.

![a_records_ovh](a_records_ovh.png)

![ovh_a_records_registered](registered_records_ovh.png)

## 3. Add Google site redirection from OVH Domain

Go to Google Site custom URL webpage [here](https://admin.google.com/u/1/ac/apps/sites/address) and add the URL of your published Google site.

![register_new_custom_url](register_new_custom_url.png)

![register_custom_subdomain](register_custom_subdomain.png)

## 4. Register Google CNAME url to OVH DNS Zone

Go back to OVH DNS Zone configuration and add as explained in last Google Site popup, the corresponding CNAME url.

![register_cname](register_cname.png)

## 4. Enjoy
