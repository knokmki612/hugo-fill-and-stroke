---
title: {{ replace .Name "-" " " | title }}
date: {{ .Date }}
tags:
archives:
  - {{ now.Format "2006" }}
  - {{ now.Format "2006/01" }}
draft: true
---

