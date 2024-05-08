#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const questions = [
    {
        question: chalk.bgBlue("What is the capital of Pakistan?"),
        choices: [
            chalk.bgGreen("Islambad"),
            chalk.bgYellow("Lahore"),
            chalk.bgRed("Karachi"),
            chalk.bgCyan("Panjab"),
        ],
        answerIndex: 0,
    },
    {
        question: chalk.bgCyan("Who was the first prime minister of Pakistn?"),
        choices: [
            chalk.bgGreen("Mr.Liaqat Ali Khan"),
            chalk.bgRed("Khawaja Nazimuddin"),
            chalk.bgCyan("Mr.Muhammad Ali Bogra"),
            chalk.bgMagenta("Ch.Muhammeclsd Ali"),
        ],
        answerIndex: 0,
    },
    {
        question: chalk.bgGreen("What is the chemical symbol for water?"),
        choices: [
            chalk.bgMagenta("H2O"),
            chalk.bgGreen("CO2"),
            chalk.bgRed("O2"),
            chalk.bgCyan("H2SO4"),
        ],
        answerIndex: 0,
    },
];
async function startQuiz() {
    let score = 0;
    console.log(chalk.yellow("*".repeat(50)));
    console.log(chalk.green("\n              Welcome to the Quiz Game!\n"));
    console.log(chalk.yellow("*".repeat(50)));
    for (const question of questions) {
        const { answerIndex } = question;
        const { userAnswer } = await inquirer.prompt([
            {
                type: "list",
                name: "userAnswer",
                message: question.question,
                choices: question.choices,
            },
        ]);
        if (userAnswer === question.choices[answerIndex]) {
            console.log(chalk.bgGray("Correct!\n"));
            score++;
        }
        else {
            console.log(chalk.bgRed(`Incorrect. The correct answer is) ${question.choices[answerIndex]}.\n`));
        }
    }
    console.log(chalk.bgYellow(`Quiz ended. Your score:) ${score} out of ${questions.length}`));
}
startQuiz();
