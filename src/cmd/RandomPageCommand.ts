import { Terminal } from "../Terminal.js";
import { Command } from "../Command.js";

export class RandomPageCommand implements Command {
    name = "random-trash";
    aliases = ["rt", "random", "trash", "random-trash-site"];

    private static sitesList = [
        "https://longdogechallenge.com",
        "https://checkboxrace.com",
        "https://onesquareminesweeper.com",
        "http://heeeeeeeey.com",
        "http://corndog.io",
        "https://binarypiano.com",
        "https://mondrianandme.com",
        "https://puginarug.com",
        "http://floatingqrcode.com",
        "https://checkboxolympics.com",
        "https://alwaysjudgeabookbyitscover.com",
        "https://thatsthefinger.com",
        "https://cant-not-tweet-this.com",
        "https://cursoreffects.com",
        "http://eelslap.com",
        "http://www.staggeringbeauty.com",
        "http://burymewithmymoney.com",
        "https://smashthewalls.com",
        "https://jacksonpollock.org",
        "http://endless.horse",
        "http://drawing.garden",
        "https://www.trypap.com",
        "http://www.republiquedesmangues.fr",
        "http://www.movenowthinklater.com",
        "http://www.rrrgggbbb.com",
        "http://www.koalastothemax.com",
        "http://www.everydayim.com",
        "http://randomcolour.com",
        "http://cat-bounce.com",
        "http://chrismckenzie.com",
        "https://thezen.zone",
        "http://ninjaflex.com",
        "http://ihasabucket.com",
        "http://corndogoncorndog.com",
        "http://www.hackertyper.com",
        "https://pointerpointer.com",
        "http://imaninja.com",
        "http://www.partridgegetslucky.com",
        "http://www.ismycomputeron.com",
        "http://www.nullingthevoid.com",
        "http://www.muchbetterthanthis.com",
        "http://www.yesnoif.com",
        "http://lacquerlacquer.com",
        "http://potatoortomato.com",
        "http://iamawesome.com",
        "https://strobe.cool",
        "http://thisisnotajumpscare.com",
        "http://doughnutkitten.com",
        "http://crouton.net",
        "http://corgiorgy.com",
        "http://www.wutdafuk.com",
        "http://unicodesnowmanforyou.com",
        "http://chillestmonkey.com",
        "http://scroll-o-meter.club",
        "http://www.crossdivisions.com",
        "http://tencents.info",
        "https://boringboringboring.com",
        "http://www.patience-is-a-virtue.org",
        "http://pixelsfighting.com",
        "http://isitwhite.com",
        "https://existentialcrisis.com",
        "http://onemillionlols.com",
        "http://www.omfgdogs.com",
        "http://oct82.com",
        "http://chihuahuaspin.com",
        "http://www.blankwindows.com",
        "http://tunnelsnakes.com",
        "http://www.trashloop.com",
        "http://www.ascii-middle-finger.com",
        "http://spaceis.cool",
        "http://www.doublepressure.com",
        "http://www.donothingfor2minutes.com",
        "http://buildshruggie.com",
        "http://buzzybuzz.biz",
        "http://yeahlemons.com",
        "http://wowenwilsonquiz.com",
        "https://thepigeon.org",
        "http://notdayoftheweek.com",
        "http://www.amialright.com",
        "https://greatbignothing.com",
        "https://zoomquilt.org",
        "https://dadlaughbutton.com",
        "https://remoji.com",
        "http://papertoilet.com",
        "https://loopedforinfinity.com",
        "https://www.bouncingdvdlogo.com",
        "https://findtheinvisiblecow.com",
    ];

    private history: string[] = [];

    async execute() {
        const url = this.getRandomSite();
        await Terminal.writeln(
            `🌐 Öffne zufällige Trash-Seite: <a href="${url}" target="_blank">${url}</a>...`,
            "color2"
        );
        Terminal.newTab(url);
    }

    private getRandomSite(): string {
        if (this.history.length === RandomPageCommand.sitesList.length) {
            this.history = [];
        }
        let site =
            RandomPageCommand.sitesList[
                Math.floor(Math.random() * RandomPageCommand.sitesList.length)
            ];
        if (this.history.includes(site)) {
            return this.getRandomSite();
        }
        this.history.push(site);
        return site;
    }
}
