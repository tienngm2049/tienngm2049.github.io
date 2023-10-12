---
name: Exploratory Data Analysis and Classification Task
tools: [Pandas, Seaborn, Decision Tree, Random Forest, XGBoost]
image: /images/bank-mkt.jpg
description: This project aims to conduct EDA and classification modeling using machine learning
<!-- external_url: -->
---
Welcome to my second portfolio project! In this project, I embarked on an exciting journey into the world of bank marketing, with a strong focus on Exploratory Data Analysis (EDA) and Classification Modeling. My primary objective was to predict whether a client would subscribe to a term deposit, a pivotal task for any financial institution.

## Project Overview

**Data Exploration and Analysis (EDA)**: My exploration began with a comprehensive EDA, where I utilized a variety of techniques, including univariate analysis, multivariate analysis, and correlation analysis. In this phase, I meticulously cleaned and prepared the data to ensure its quality and reliability. This extensive process allowed me to uncover hidden patterns and relationships within the dataset, as well as identify key features that significantly influence term deposit subscriptions.

**Classification Models**: To predict client subscriptions effectively, I constructed multiple classification models, each with its unique characteristics. These models included Decision Tree, Random Forest, and XGBoost. The Decision Tree model provided transparency into its decision-making process, while Random Forest and XGBoost were known for their powerful predictive capabilities. I fine-tuned and evaluated these models using various metrics, such as F1-score, confusion matrix, and ROC curve, ultimately selecting the most effective one.

### Exploratory Data Analysis (EDA)

In the realm of EDA, I left no stone unturned. I employed a wide range of techniques, including univariate analysis, multivariate analysis, and correlation analysis. These methods allowed me to:

- **Uncover Hidden Patterns**: Through visualization and statistical exploration, I unearthed hidden patterns and relationships within the data.
- **Identify Key Features**: I pinpointed crucial features that significantly influence term deposit subscriptions.

### Classification Models

In the pursuit of accurate predictions, I implemented three distinct models:

1. **Decision Tree (White-box Model)**: This model provides transparency into the decision-making process, making it easier to interpret the results.

2. **Random Forest (Black-box Model)**: Renowned for its predictive power, Random Forest was one of the models I used. I fine-tuned its hyperparameters to optimize performance.

3. **XGBoost (Black-box Model)**: Another powerful black-box model in my arsenal, XGBoost delivered remarkable predictive capabilities. I fine-tuned this model as well to ensure the best results.

### Project Findings

The final model selected was the Random Forest with tuned hyperparameters. Here are the key findings:

- **Model Performance**:
  - F1 Score: 0.62
  - Recall: 0.71
  - Precision: 0.56
  - Accuracy: 0.90
  - Other evaluation metrics: ROC Curve, Confusion Matrix

- **Top 5 Feature Importances**:
  1. Duration
  2. Month
  3. Poutcome (Outcome of the Previous Marketing Campaign)
  4. Day
  5. Age

### Final Recommendations for the Next Campaign

Based on the analysis and feature importance, here are my recommendations for the next marketing campaign:

1. **Avoid Default and Loan**: Concentrate efforts on clients without credit defaults and personal loans, as these categories have the lowest contribution to subscription success.

2. **Enhance Call Quality and Duration**: Implement strategies to improve the quality of calls and increase call duration. Engaging and informative conversations lasting around 4 minutes or longer yield the highest success rates.

3. **Target Previous Positive Respondents**: Prioritize clients who responded positively in the previous campaign, as they are more likely to subscribe again.

4. **Strategic Timing**: Plan campaigns to coincide with months that exhibit higher subscription rates (April to August), particularly targeting the middle of the month (around days 10 to 20) and periods at the end and beginning of each month. These temporal patterns offer increased chances of success.

## Project Value

Through this project, I gained valuable insights into in-depth data analysis and running classification models, including the patience required for hyperparameter tuning. It was a truly enriching journey, and there are some interesting moment such as when I have to wait for 3 hours for hyperparameter tuning.

<p class="text-center">
{% include elements/button.html link="https://shorturl.at/CIRSW" text="Explore the Project" %}
</p>