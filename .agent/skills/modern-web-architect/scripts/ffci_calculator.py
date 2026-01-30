#!/usr/bin/env python3
"""
FFCI Calculator (Frontend Feasibility & Complexity Index)
=========================================================
Part of Skill: Modern Web Architect
Upgrade: v1.0 (Dynamic Tooling)

Calculates the feasibility of a frontend architecture using the formula:
FFCI = (Fit + Reusability + Performance) - (Complexity + Maintenance)
"""

import sys
import time

# ANSI Colors
class Colors:
    HEADER = '\033[95m'
    BLUE = '\033[94m'
    GREEN = '\033[92m'
    YELLOW = '\033[93m'
    RED = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'

def print_banner():
    print(f"\n{Colors.HEADER}{'='*50}")
    print(f"   ⚛️  FFCI CALCULATOR (Modern Web Architect)")
    print(f"{'='*50}{Colors.ENDC}\n")

def get_score(prompt, description):
    while True:
        try:
            print(f"{Colors.BOLD}{prompt}{Colors.ENDC}")
            print(f"{Colors.BLUE}   {description}{Colors.ENDC}")
            val = input(f"   Score (1-5): {Colors.YELLOW}")
            print(f"{Colors.ENDC}", end="")
            score = int(val)
            if 1 <= score <= 5:
                return score
            print(f"{Colors.RED}   ❌ Please enter a number between 1 and 5.{Colors.ENDC}\n")
        except ValueError:
            print(f"{Colors.RED}   ❌ Invalid input.{Colors.ENDC}\n")

def main():
    print_banner()
    print("Evaluate your architectural choice (e.g., Next.js App Router, Micro-frontends...)")
    print("Scale: 1 (Low/Bad) -> 5 (High/Good/Complex)\n")

    # Inputs
    fit = get_score("1. Architectural Fit", "Does this tech stack naturally solve the problem?")
    reuse = get_score("2. Reusability", "Can components/logic be shared?")
    perf = get_score("3. Performance Potential", "Is it fast by default (Lighthouse score)?")
    
    print(f"\n{Colors.YELLOW}--- Negative Factors (Lower is better for project, but rate 1-5 based on intensity) ---{Colors.ENDC}\n")
    
    comp = get_score("4. Complexity", "How hard is it to implement? (5 = Very Hard)")
    maint = get_score("5. Maintenance Cost", "How hard is it to debug/update later? (5 = Nightmare)")

    # Calculation
    # FFCI = (Fit + Reusability + Performance) - (Complexity + Maintenance)
    ffci = (fit + reuse + perf) - (comp + maint)
    
    # Analysis
    print(f"\n{Colors.HEADER}{'-'*50}")
    print(f"📊 RESULT: FFCI = {ffci}")
    print(f"{'-'*50}{Colors.ENDC}")

    if ffci >= 10:
        print(f"{Colors.GREEN}🚀 VERDICT: EXCELLENT (Go Ahead)")
        print(f"   This architecture is robust and sustainable.{Colors.ENDC}")
    elif ffci >= 6:
        print(f"{Colors.YELLOW}⚠️  VERDICT: ACCEPTABLE (Proceed with Caution)")
        print(f"   Consider simplifying complexity or improving reusability.{Colors.ENDC}")
    else:
        print(f"{Colors.RED}🛑 VERDICT: HIGH RISK (Redesign Recommended)")
        print(f"   The complexity outweighs the benefits. Simplification is required.{Colors.ENDC}")
    
    print("\nRecommendation:")
    if comp > 3:
        print(f"- Reduce Complexity: Check 'resources/architecture_templates.json' for standard patterns.")
    if perf < 3:
        print(f"- Improve Performance: Verify Core Web Vitals strategy.")

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\n\nUser cancelled.")
