import { ActionGame } from "./Action_Game.js";
import { Adventure } from "./Adventure.js";
import { Board } from "./Board.js";
import { Fighting } from "./Fighting.js";
import { Other } from "./OtherGame.js";
import { Puzzle } from "./Puzzle.js";
import { Racing } from "./Racing.js";
import { Shooting } from "./Shooting.js";
import { Simulator } from "./Simulator.js";
import { Sports } from "./Sports.js";

export const Sport =
{
    question: "Which category best defines your game?",
    options: [
        {
            imageURL: "https://www.intelivita.co.uk/_next/static/media/Sport.942fc6f2.svg",
            label: "Sport",
            children: [
                Sports
            ]
        },
        {

            imageURL: "https://www.intelivita.co.uk/_next/static/media/Shooting.2aa1744c.svg",
            label: "Shooting",
            children: [
                Shooting
            ]
        },
        {
            imageURL: "https://www.intelivita.co.uk/_next/static/media/Racing.7819b97d.svg",
            label: "Racing",
            children: [
                Racing
            ]
        },
        {
            imageURL: "https://www.intelivita.co.uk/_next/static/media/Adventure.b6bf28ec.svg",
            label: "Adventure",
            children: [
                Adventure
            ]
        },
        {
            imageURL: "https://www.intelivita.co.uk/_next/static/media/Puzzle.0f69d73a.svg",
            label: "Puzzle",
            children: [
                Puzzle
            ]
        },
        {
            imageURL: "https://www.intelivita.co.uk/_next/static/media/Fighting.65347599.svg",
            label: "Fighting",
            children: [
                Fighting
            ]
        },
        {
            imageURL: "https://www.intelivita.co.uk/_next/static/media/ActionGame.f005a4b9.svg",
            label: "Action Game",
            children: [
                ActionGame
            ]
        },
        {
            imageURL: "https://www.intelivita.co.uk/_next/static/media/Board.c0df4f21.svg",
            label: "Board",
            children: [
                Board
            ]
        },

        {
            imageURL: "https://www.intelivita.co.uk/_next/static/media/Simulator.bedb916d.svg",
            label: "Simulator",
            children: [
                Simulator
            ]
        },
        {
            imageURL: "https://www.intelivita.co.uk/_next/static/media/other.a0a5b0cf.svg",
            label: "Other",
            children: [
                Other
            ]
        },
    ]
}