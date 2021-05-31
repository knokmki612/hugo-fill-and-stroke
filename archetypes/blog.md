---
title: {{ replace .Name "-" " " | title }}
date: {{ .Date }}
happenDate: {{ now.Format "2006-01-02" }}
tags:
  - {{ i18n "DiaryTag" }}
archives:
  - {{ now.Format "2006" }}
  - {{ now.Format "2006-01" }}
draft: true
---

