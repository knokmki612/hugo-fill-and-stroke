---
title: {{ replace .Name "-" " " | title }}
date: {{ .Date }}
tags:
  - {{ i18n "DiaryTag" }}
archives:
  - {{ now.Format "2006" }}
  - {{ now.Format (i18n "ArchiveDateFormat") }}
draft: true
---

