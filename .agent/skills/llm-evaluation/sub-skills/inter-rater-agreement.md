# Inter-Rater Agreement

```python
from sklearn.metrics import cohen_kappa_score

def calculate_agreement(rater1_scores, rater2_scores):
    """Calculate inter-rater agreement."""
    kappa = cohen_kappa_score(rater1_scores, rater2_scores)

    interpretation = {
        kappa < 0: "Poor",
        kappa < 0.2: "Slight",
        kappa < 0.4: "Fair",
        kappa < 0.6: "Moderate",
        kappa < 0.8: "Substantial",
        kappa <= 1.0: "Almost Perfect"
    }

    return {
        "kappa": kappa,
        "interpretation": interpretation[True]
    }
```

## A/B Testing