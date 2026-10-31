---
title: "Credit Risk Scorecard: Probability of Default on Public Lending Data"
description: "An end-to-end PD model, from target definition and WoE binning to validation and monitoring, built the way a bank would build it."
date: 2026-11-01
tags: [credit-risk, scorecard, logistic-regression, lightgbm]
status: featured
problem: "Estimate each applicant's probability of default (90+ DPD within 12 months) so that an approve/decline cut-off can be set against a target loss rate."
approach: "WoE/IV binning + logistic regression scorecard as the benchmark, LightGBM as the challenger; out-of-time validation; Gini, KS, calibration and PSI."
outcome: "TODO: fill in with real results (Gini on OOT sample, approval rate vs bad rate at the chosen cut-off)."
stack: [Python, pandas, scikit-learn, optbinning, LightGBM]
# TODO: thay "TBD" bằng kết quả thật trên tập OOT (dữ liệu public)
metrics:
  - { label: Gini, value: "TBD", note: "out-of-time sample" }
  - { label: KS, value: "TBD", note: "max separation good vs bad" }
  - { label: PSI, value: "TBD", note: "train vs OOT score drift" }
  - { label: Calibration, value: "TBD", note: "Brier score / ECE" }
# repo: https://github.com/tienngm2049/credit-risk-pd-scorecard
draft: true
---

> **Draft.** Bài này chỉ hiện khi chạy `npm run dev`. Đổi `draft: false` khi đã có kết quả thật.
> Khung bên dưới là gợi ý cấu trúc. Xem `docs/04-them-du-an.md`.

## 1. Business question

Which decision does this model support, and what does a wrong decision cost? (approve a bad
borrower vs decline a good one)

## 2. Problem formulation

- **Unit of analysis:** one application.
- **Target:** $y = 1$ if the account reaches 90+ days past due within 12 months of booking.
- **Observation / performance window:** …
- **Exclusions:** …

The model estimates

$$
\text{PD}(x) = P(y = 1 \mid x) = \frac{1}{1 + e^{-(\beta_0 + \sum_j \beta_j \,\text{WoE}_j(x_j))}}
$$

## 3. Data

Dataset, size, time range, default rate, train / test / out-of-time split.

## 4. Method

- Binning and Weight of Evidence, Information Value for feature selection.
- Logistic regression scorecard (points to double the odds).
- Challenger: LightGBM. When is the extra complexity worth it?

## 5. Validation

| Metric | Train | Test | OOT |
| --- | --- | --- | --- |
| Gini | | | |
| KS | | | |
| PSI | – | | |

Calibration plot, rank-ordering by score decile.

## 6. From score to decision

Cut-off strategy: approval rate vs expected bad rate. Which cut-off would I recommend, and why?

## 7. Limitations & what I'd do next

Reject inference, monitoring plan, fairness checks.
