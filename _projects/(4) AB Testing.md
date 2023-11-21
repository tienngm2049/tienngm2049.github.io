---
name: Sales Conversion Optimization - AB Test with Hypothesis Testing
tools: [Pandas, Seaborn, Pingouin, Statmodels]
image: /images/abtest.jpg
description: This project utilizes A/B testing and hypothesis testing to optimize sales conversion optimization of a company
# external_url
---
# Sales Conversion Optimization - AB Test with Hypothesis Testing

Welcome to my project! The primary objective was to evaluate the impact of various strategies on sales conversion rates, employing statistical techniques to draw actionable insights.

## Project Overview

**A/B Testing**: A/B testing, also known as split testing, is a powerful method to compare two versions of a webpage or strategy to determine which one performs better. In this project, I designed and conducted A/B tests to assess the effectiveness of different strategies in optimizing sales conversion rates.

**Hypothesis Testing**: Hypothesis testing is a fundamental statistical technique used to make informed decisions based on sample data. I formulated hypotheses, conducted hypothesis tests, and interpreted the results to determine the statistical significance of the tested strategies.

**Metrics**: The project focused on three key metrics: Conversion Rate (CR), Click-Through Rate (CTR), and Cost Per Click (CPC). 

These metrics were chosen for their importance in assessing the effectiveness of sales conversion optimization strategies and can be easily calculated from the dataset.

**Tests and Plots Used**:
- **Normality Testing**: To assess the normal distribution of data, I utilized the Shapiro-Wilk test, QQ plots, and histograms.
- **Power Analysis**: I conducted power analysis to choose suitable sample sizes, especially since one campaign had a significantly smaller sample size than the others.
- **Bootstrapping and Mann-Whitney U Test**: To calculate p-values for each pair of campaigns, I employed bootstrapping techniques and the Mann-Whitney U test. This was necessary due to the uneven sample sizes among campaigns.

### Hypothesis Formulation and Testing

Hypotheses were crucial in this project. I formulated clear null and alternative hypotheses and conducted hypothesis tests using statistical significance tests such as t-tests or chi-squared tests. The results provided insights into the effectiveness of different strategies.

### Statistical Significance and Practical Significance

Interpreting the results involved assessing both statistical significance and practical significance. I distinguished between statistically significant findings and those with practical importance, offering actionable insights for decision-makers.

## Project Value and Reflection

This project adds significant value to businesses seeking to enhance their sales conversion rates. It showcases the application of statistical hypothesis testing in the context of A/B testing, providing insights that drive data-driven decision-making.

### My Thoughts

I gained valuable knowledge about hypothesis testing in this case, including both parametric and non-parametric tests, as well as assumptions and power analysis. The experience with bootstrapping and the extensive examination of statistical methods have made this project particularly satisfying. What began as a simple set of tests evolved into a deep dive into statistics, ultimately providing me with a sense of accomplishment and learning.

<p class="text-center">
{% include elements/button.html link="https://github.com/tienngm2049/projects/tree/main/portfolio_04_sales_conversion_ab_test_hypothesis_testing" text="Explore the Project" %}
</p>