# Dice Game Kata

The purpose of this [kata](https://es.wikipedia.org/wiki/Kata#Discusiones_sobre_las_pr%C3%A1cticas_de_kata) is to practice TDD with Javascript by simulating a dice game.

## Get started

1. Clone the repository in your local machine
`git clone git@github.com:mapu77/tdd-ff5.git`

2. Install [Node 18](https://nodejs.org/en/download)

3. Navigate to the root of the project
`cd tdd-ff5`

4. Install code dependencies
`npm install`

5. Run test to check setup
`npm run test`

You should see an outcome like:
```
> tdd-ff5@1.0.0 test
> jest

 PASS  src/DiceGame.test.js
  DiceGame
    ✓ dummy test (2 ms)
    ○ skipped no repeted value scores 0 points

Test Suites: 1 passed, 1 total
Tests:       1 skipped, 1 passed, 2 total
Snapshots:   0 total
Time:        0.489 s, estimated 1 s
Ran all test suites.
```

## Game rule

The game consists of 6 dice. On each roll, you got a score based on the following rules:

| Rule                             | Score                | Example                                                                             |
| -------------------------------- | -------------------- | ----------------------------------------------------------------------------------- |
| All dice are different           | 100                  | `[1, 2, 3, 4, 5, 6]`                                                                |
| For every group of 2 equal dices | Group dice value     | `[2, 2, 3, 4, 5, 6]` -> `2`, but `[1, 1, 2, 2, 3, 3]` -> `6` points (1 + 2 + 3)     |
| For every group of 3 equal dices | 3 * Group dice value | `[2, 2, 2, 4, 5, 6]` -> `6`, but `[3, 3, 3, 4, 4, 4]` -> `9` points (3 * 3 + 3 * 4) |
| 4 equal dices                    | 10 * Dice value      | `[2, 2, 2, 2, 5, 6]` -> `20` points (10 * 2)                                        |
| 5 equal dices                    | 0                    | `[1, 1, 1, 1, 1, 6]`                                                                |
| All equal dices                  | 100 * Dice value     | `[1, 1, 1, 1, 1, 1]` -> `100` points, and `[6, 6, 6, 6, 6, 6]` -> `600` points      |

- Rules are accumulative, so a roll like `[3, 3, 3, 3, 5, 5]` scores `35` points because there's a group of four 3's and a pair of 5's (10 * 3 + 5)

### Want more rules?
Just be creative ;)