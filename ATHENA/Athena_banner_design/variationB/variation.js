(function() {
    try {
        /* main variables */
        var debug = 0;
        var variation_name = "";

        /* all Pure helper functions */


        // selector would be the parent div where your are changing css/js
        function waitForElement(selector, trigger, delayInterval, delayTimeout) {
            var interval = setInterval(function() {
                if (
                    document &&
                    document.querySelector(selector) &&
                    document.querySelectorAll(selector).length > 0
                ) {
                    clearInterval(interval);
                    trigger();
                }
            }, delayInterval);
            setTimeout(function() {
                clearInterval(interval);
            }, delayTimeout);
        }

        /* Variation functions */
        function init() {
            // write your js here(function can be outside)
            // svgs
            const trust_pilot_logo = `data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIGFyaWEtbGFiZWxsZWRieT0idHJ1c3RwaWxvdExvZ28iIHZpZXdCb3g9IjAgMCAxMjYgMzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBjbGFzcz0idHAtbG9nb19fdGV4dCIgZD0iTTMzLjA3NDc3NCAxMS4wNzAwNUg0NS44MTgwNnYyLjM2NDE5NmgtNS4wMTA2NTZ2MTMuMjkwMzE2aC0yLjc1NTMwNlYxMy40MzQyNDZoLTQuOTg4NDM1VjExLjA3MDA1aC4wMTExMXptMTIuMTk4ODkyIDQuMzE5NjI5aDIuMzU1MzQxdjIuMTg3NDMzaC4wNDQ0NGMuMDc3NzcxLS4zMDkzMzQuMjIyMjAzLS42MDc2Mi40MzMyOTUtLjg5NDg1OS4yMTEwOTItLjI4NzIzOS40NjY2MjQtLjU2MzQzLjc2NjU5Ny0uNzk1NDMuMjk5OTcyLS4yNDMwNDguNjMzMjc2LS40MzA4NTguOTk5OTA5LS41ODU1MjUuMzY2NjMzLS4xNDM2Mi43NDQzNzctLjIyMDk1MyAxLjEyMjEyLS4yMjA5NTMuMjg4ODYzIDAgLjQ5OTk1NS4wMTEwNDcuNjExMDU2LjAyMjA5NS4xMTExLjAxMTA0OC4yMjIyMDIuMDMzMTQzLjM0NDQxMy4wNDQxOXYyLjQwODM4N2MtLjE3Nzc2Mi0uMDMzMTQzLS4zNTU1MjMtLjA1NTIzOC0uNTQ0Mzk1LS4wNzczMzMtLjE4ODg3Mi0uMDIyMDk2LS4zNjY2MzMtLjAzMzE0My0uNTQ0Mzk1LS4wMzMxNDMtLjQyMjE4NCAwLS44MjIxNDguMDg4MzgtMS4xOTk4OTEuMjU0MDk2LS4zNzc3NDQuMTY1NzE0LS42OTk5MzYuNDE5ODEtLjk3NzY4OS43NDAxOTItLjI3Nzc1My4zMzE0MjktLjQ5OTk1NS43MjkxNDQtLjY2NjYwNiAxLjIxNTI0LS4xNjY2NTIuNDg2MDk3LS4yNDQ0MjIgMS4wMzg0OC0uMjQ0NDIyIDEuNjY4MTk1djUuMzkxMjVoLTIuNTEwODgzVjE1LjM4OTY4aC4wMTExMXptMTguMjIwNTY3IDExLjMzNDg4M0g2MS4wMjc3OXYtMS41Nzk4MTNoLS4wNDQ0NGMtLjMxMTA4My41NzQ0NzctLjc2NjU5NyAxLjAyNzQzLTEuMzc3NjUzIDEuMzY5OTA4LS42MTEwNTUuMzQyNDc3LTEuMjMzMjIxLjUxOTI0LTEuODY2NDk3LjUxOTI0LTEuNDk5ODY0IDAtMi41ODg2NTQtLjM2NDU3My0zLjI1NTI2LTEuMTA0NzY1LS42NjY2MDYtLjc0MDE5My0uOTk5OTA5LTEuODU2MDA1LS45OTk5MDktMy4zNDc0MzdWMTUuMzg5NjhoMi41MTA4ODN2Ni45NDg5NjhjMCAuOTk0Mjg4LjE4ODg3MiAxLjcwMTMzNy41Nzc3MjUgMi4xMTAxLjM3Nzc0NC40MDg3NjMuOTIyMTM5LjYxODY2OCAxLjYxMDk2NS42MTg2NjguNTMzMjg1IDAgLjk2NjU4LS4wNzczMzMgMS4zMjIxMDItLjI0MzA0OC4zNTU1MjQtLjE2NTcxNC42NDQzODYtLjM3NTYyLjg1NTQ3OC0uNjUxODEuMjIyMjAyLS4yNjUxNDQuMzc3NzQ0LS41OTY1NzQuNDc3NzM1LS45NzIxOTQuMDk5OTktLjM3NTYyLjE0NDQzMS0uNzg0MzgyLjE0NDQzMS0xLjIyNjI4OHYtNi41NzMzNDloMi41MTA4ODN2MTEuMzIzODM2em00LjI3NzM5LTMuNjM0Njc1Yy4wNzc3Ny43MjkxNDQuMzU1NTIyIDEuMjM3MzM2LjgzMzI1NyAxLjUzNTYyMy40ODg4NDQuMjg3MjM4IDEuMDY2NTcuNDQxOTA1IDEuNzQ0Mjg2LjQ0MTkwNS4yMzMzMTIgMCAuNDk5OTU0LS4wMjIwOTUuNzk5OTI3LS4wNTUyMzguMjk5OTczLS4wMzMxNDMuNTg4ODM2LS4xMTA0NzYuODQ0MzY4LS4yMDk5MDUuMjY2NjQyLS4wOTk0MjkuNDc3NzM0LS4yNTQwOTYuNjU1NDk2LS40NTI5NTQuMTY2NjUyLS4xOTg4NTcuMjQ0NDIyLS40NTI5NTMuMjMzMzEyLS43NzMzMzUtLjAxMTExLS4zMjAzODEtLjEzMzMyMS0uNTg1NTI1LS4zNTU1MjMtLjc4NDM4Mi0uMjIyMjAyLS4yMDk5MDYtLjQ5OTk1NS0uMzY0NTczLS44NDQzNjgtLjQ5NzE0NC0uMzQ0NDEzLS4xMjE1MjUtLjczMzI2Ny0uMjMyLTEuMTc3NjctLjMyMDM4Mi0uNDQ0NDA1LS4wODgzODEtLjg4ODgwOS0uMTg3ODEtMS4zNDQzMjMtLjI4NzIzOS0uNDY2NjI0LS4wOTk0MjktLjkyMjEzOC0uMjMyLTEuMzU1NDMyLS4zNzU2Mi0uNDMzMjk0LS4xNDM2Mi0uODIyMTQ4LS4zNDI0NzctMS4xNjY1NjEtLjU5NjU3My0uMzQ0NDEzLS4yNDMwNDgtLjYyMjE2Ni0uNTYzNDMtLjgyMjE0OC0uOTUwMDk3LS4yMTEwOTItLjM4NjY2OC0uMzExMDgzLS44NjE3MTYtLjMxMTA4My0xLjQzNjE5NCAwLS42MTg2NjguMTU1NTQyLTEuMTI2ODYuNDU1NTE1LTEuNTQ2NjcuMjk5OTcyLS40MTk4MS42ODg4MjYtLjc1MTI0IDEuMTQ0MzQtMS4wMDUzMzYuNDY2NjI0LS4yNTQwOTUuOTc3NjktLjQzMDg1OCAxLjU0NDMwNC0uNTQxMzM0LjU2NjYxNS0uMDk5NDI5IDEuMTExMDEtLjE1NDY2NyAxLjYyMjA3NS0uMTU0NjY3LjU4ODgzNiAwIDEuMTU1NDUuMDY2Mjg2IDEuNjg4NzM2LjE4NzgxLjUzMzI4NS4xMjE1MjQgMS4wMjIxMy4zMjAzODEgMS40NTU0MjMuNjA3NjIuNDMzMjk0LjI3NjE5MS43ODg4MTcuNjQwNzY0IDEuMDc3NjggMS4wODI2Ny4yODg4NjMuNDQxOTA1LjQ2NjYyNC45ODMyNC41NDQzOTUgMS42MTI5NTVoLTIuNjIxOTg0Yy0uMTIyMjExLS41OTY1NzItLjM4ODg1NC0xLjAwNTMzNS0uODIyMTQ4LTEuMjA0MTkzLS40MzMyOTQtLjIwOTkwNS0uOTMzMjQ4LS4zMDkzMzQtMS40ODg3NTMtLjMwOTMzNC0uMTc3NzYyIDAtLjM4ODg1NC4wMTEwNDgtLjYzMzI3Ni4wNDQxOS0uMjQ0NDIyLjAzMzE0NC0uNDY2NjI0LjA4ODM4Mi0uNjg4ODI2LjE2NTcxNS0uMjExMDkyLjA3NzMzNC0uMzg4ODU0LjE5ODg1OC0uNTQ0Mzk1LjM1MzUyNS0uMTQ0NDMyLjE1NDY2Ny0uMjIyMjAzLjM1MzUyNS0uMjIyMjAzLjYwNzYyIDAgLjMwOTMzNS4xMTExMDEuNTUyMzgzLjMyMjE5My43NDAxOTMuMjExMDkyLjE4NzgxLjQ4ODg0NS4zNDI0NzcuODMzMjU4LjQ3NTA0OC4zNDQ0MTMuMTIxNTI0LjczMzI2Ny4yMzIgMS4xNzc2NzEuMzIwMzgyLjQ0NDQwNC4wODgzODEuODk5OTE4LjE4NzgxIDEuMzY2NTQyLjI4NzIzOS40NTU1MTUuMDk5NDI5Ljg5OTkxOS4yMzIgMS4zNDQzMjMuMzc1NjIuNDQ0NDA0LjE0MzYyLjgzMzI1Ny4zNDI0NzcgMS4xNzc2Ny41OTY1NzMuMzQ0NDE0LjI1NDA5NS42MjIxNjYuNTYzNDMuODMzMjU4LjkzOTA1LjIxMTA5Mi4zNzU2Mi4zMjIxOTMuODUwNjY4LjMyMjE5MyAxLjQwMzA1IDAgLjY3MzkwNi0uMTU1NTQxIDEuMjM3MzM2LS40NjY2MjQgMS43MTIzODUtLjMxMTA4My40NjQwMDEtLjcxMTA0Ny44NTA2NjktMS4xOTk4OTEgMS4xMzc5MDctLjQ4ODg0NS4yODcyNC0xLjA0NDM1LjUwODE5Mi0xLjY0NDI5NS42NDA3NjQtLjU5OTk0Ni4xMzI1NzItMS4xOTk4OTEuMTk4ODU3LTEuNzg4NzI3LjE5ODg1Ny0uNzIyMTU2IDAtMS4zODg3NjItLjA3NzMzMy0xLjk5OTgxOC0uMjQzMDQ4LS42MTEwNTYtLjE2NTcxNC0xLjE0NDM0LS40MDg3NjMtMS41ODg3NDUtLjcyOTE0NC0uNDQ0NDA0LS4zMzE0My0uNzk5OTI3LS43NDAxOTItMS4wNTU0Ni0xLjIyNjI4OS0uMjU1NTMyLS40ODYwOTYtLjM4ODg1My0xLjA3MTYyMS0uNDExMDczLTEuNzQ1NTI4aDIuNTMzMTAzdi0uMDIyMDk1em04LjI4ODEzNS03LjcwMDIwOGgxLjg5OTgyOHYtMy40MDI2NzVoMi41MTA4ODN2My40MDI2NzVoMi4yNjY0NnYxLjg2NzA1MmgtMi4yNjY0NnY2LjA1NDEwOWMwIC4yNjUxNDMuMDExMTEuNDg2MDk2LjAzMzMzLjY4NDk1NC4wMjIyMi4xODc4MS4wNzc3Ny4zNTM1MjQuMTU1NTQyLjQ4NjA5Ni4wNzc3Ny4xMzI1NzIuMTk5OTgxLjIzMi4zNjY2MzMuMjk4Mjg3LjE2NjY1MS4wNjYyODUuMzc3NzQzLjA5OTQyOC42NjY2MDYuMDk5NDI4LjE3Nzc2MiAwIC4zNTU1MjMgMCAuNTMzMjg1LS4wMTEwNDcuMTc3NzYyLS4wMTEwNDguMzU1NTIzLS4wMzMxNDMuNTMzMjg1LS4wNzczMzR2MS45MzMzMzhjLS4yNzc3NTMuMDMzMTQzLS41NTU1MDUuMDU1MjM4LS44MTEwMzguMDg4MzgxLS4yNjY2NDIuMDMzMTQzLS41MzMyODUuMDQ0MTktLjgxMTAzNy4wNDQxOS0uNjY2NjA2IDAtMS4xOTk4OTEtLjA2NjI4NS0xLjU5OTg1NS0uMTg3ODEtLjM5OTk2My0uMTIxNTIzLS43MjIxNTYtLjMwOTMzMy0uOTQ0MzU4LS41NTIzODEtLjIzMzMxMy0uMjQzMDQ5LS4zNzc3NDQtLjU0MTMzNS0uNDY2NjI1LS45MDU5MDctLjA3Nzc3LS4zNjQ1NzMtLjEzMzMyLS43ODQzODMtLjE0NDQzMS0xLjI0ODM4NHYtNi42ODM4MjVoLTEuODk5ODI3di0xLjg4OTE0N2gtLjAyMjIyem04LjQ1NDc4OCAwaDIuMzc3NTYyVjE2LjkyNTNoLjA0NDQ0Yy4zNTU1MjMtLjY2Mjg1OC44NDQzNjgtMS4xMjY4NiAxLjQ3NzY0NC0xLjQxNDA5OC42MzMyNzYtLjI4NzIzOSAxLjMxMDk5Mi0uNDMwODU4IDIuMDU1MzY5LS40MzA4NTguODk5OTE4IDAgMS42Nzc2MjUuMTU0NjY3IDIuMzQ0MjMxLjQ3NTA0OC42NjY2MDYuMzA5MzM1IDEuMjIyMTExLjc0MDE5MyAxLjY2NjUxNSAxLjI5MjU3NS40NDQ0MDUuNTUyMzgyLjc2NjU5NyAxLjE5MzE0NS45ODg4IDEuOTIyMjkuMjIyMjAyLjcyOTE0NS4zMzMzMDMgMS41MTM1MjcuMzMzMzAzIDIuMzQyMSAwIC43NjIyODgtLjA5OTk5MSAxLjUwMjQ4LS4yOTk5NzMgMi4yMDk1My0uMTk5OTgyLjcxODA5Ni0uNDk5OTU1IDEuMzQ3ODEyLS44OTk5MTggMS45MDAxOTQtLjM5OTk2NC41NTIzODMtLjkxMTAyOS45ODMyNC0xLjUzMzE5NCAxLjMxNDY3LS42MjIxNjYuMzMxNDMtMS4zNDQzMjMuNDk3MTQ0LTIuMTg4NjkuNDk3MTQ0LS4zNjY2MzQgMC0uNzMzMjY3LS4wMzMxNDMtMS4wOTk5LS4wOTk0MjktLjM2NjYzNC0uMDY2Mjg2LS43MjIxNTctLjE3Njc2Mi0xLjA1NTQ2LS4zMjAzODEtLjMzMzMwMy0uMTQzNjItLjY1NTQ5Ni0uMzMxNDMtLjkzMzI0OS0uNTYzNDMtLjI4ODg2My0uMjMyLS41MjIxNzUtLjQ5NzE0NC0uNzIyMTU3LS43OTU0M2gtLjA0NDQ0djUuNjU2MzkzaC0yLjUxMDg4M1YxNS4zODk2OHptOC43NzY5OCA1LjY3ODQ5YzAtLjUwODE5My0uMDY2NjYtMS4wMDUzMzctLjE5OTk4MS0xLjQ5MTQzMy0uMTMzMzIxLS40ODYwOTYtLjMzMzMwMy0uOTA1OTA3LS41OTk5NDYtMS4yODE1MjctLjI2NjY0Mi0uMzc1NjItLjU5OTk0NS0uNjczOTA2LS45ODg3OTktLjg5NDg1OS0uMzk5OTYzLS4yMjA5NTMtLjg1NTQ3OC0uMzQyNDc3LTEuMzY2NTQyLS4zNDI0NzctMS4wNTU0NiAwLTEuODU1Mzg3LjM2NDU3Mi0yLjM4ODY3MiAxLjA5MzcxNy0uNTMzMjg1LjcyOTE0NC0uNzk5OTI4IDEuNzAxMzM3LS43OTk5MjggMi45MTY1NzggMCAuNTc0NDc4LjA2NjY2MSAxLjEwNDc2NC4yMTEwOTIgMS41OTA4Ni4xNDQ0MzIuNDg2MDk3LjM0NDQxNC45MDU5MDguNjMzMjc2IDEuMjU5NDMyLjI3Nzc1My4zNTM1MjUuNjExMDU2LjYyOTcxNi45OTk5MS44Mjg1NzQuMzg4ODUzLjIwOTkwNS44NDQzNjcuMzA5MzM0IDEuMzU1NDMyLjMwOTMzNC41Nzc3MjUgMCAxLjA1NTQ2LS4xMjE1MjQgMS40NTU0MjMtLjM1MzUyNS4zOTk5NjQtLjIzMi43MjIxNTctLjU0MTMzNS45Nzc2OS0uOTA1OTA3LjI1NTUzMS0uMzc1NjIuNDQ0NDAzLS43OTU0My41NTU1MDQtMS4yNzA0NzkuMDk5OTkxLS40NzUwNDkuMTU1NTQyLS45NjExNDUuMTU1NTQyLTEuNDU4Mjg5em00LjQzMjkzMS05Ljk5ODEyaDIuNTEwODgzdjIuMzY0MTk3aC0yLjUxMDg4M1YxMS4wNzAwNXptMCA0LjMxOTYzaDIuNTEwODgzdjExLjMzNDg4M2gtMi41MTA4ODNWMTUuMzg5Njc5em00Ljc1NTEyNC00LjMxOTYzaDIuNTEwODgzdjE1LjY1NDUxM2gtMi41MTA4ODNWMTEuMDcwMDV6bTEwLjIxMDE4NCAxNS45NjM4NDdjLS45MTEwMjkgMC0xLjcyMjA2Ni0uMTU0NjY3LTIuNDMzMTEzLS40NTI5NTMtLjcxMTA0Ni0uMjk4Mjg3LTEuMzEwOTkyLS43MTgwOTctMS44MTA5NDYtMS4yMzczMzctLjQ4ODg0NS0uNTMwMjg3LS44NjY1ODgtMS4xNjAwMDItMS4xMjIxMi0xLjg4OTE0Ny0uMjU1NTMzLS43MjkxNDQtLjM4ODg1NC0xLjUzNTYyMi0uMzg4ODU0LTIuNDA4Mzg2IDAtLjg2MTcxNi4xMzMzMjEtMS42NTcxNDcuMzg4ODUzLTIuMzg2MjkxLjI1NTUzMy0uNzI5MTQ1LjYzMzI3Ni0xLjM1ODg2IDEuMTIyMTItMS44ODkxNDguNDg4ODQ1LS41MzAyODcgMS4wOTk5LS45MzkwNSAxLjgxMDk0Ny0xLjIzNzMzNi43MTEwNDctLjI5ODI4NiAxLjUyMjA4NC0uNDUyOTUzIDIuNDMzMTEzLS40NTI5NTMuOTExMDI4IDAgMS43MjIwNjYuMTU0NjY3IDIuNDMzMTEyLjQ1Mjk1My43MTEwNDcuMjk4Mjg3IDEuMzEwOTkyLjcxODA5NyAxLjgxMDk0NyAxLjIzNzMzNi40ODg4NDQuNTMwMjg3Ljg2NjU4OCAxLjE2MDAwMyAxLjEyMjEyIDEuODg5MTQ4LjI1NTUzMi43MjkxNDQuMzg4ODU0IDEuNTI0NTc1LjM4ODg1NCAyLjM4NjI5IDAgLjg3Mjc2NS0uMTMzMzIyIDEuNjc5MjQzLS4zODg4NTQgMi40MDgzODctLjI1NTUzMi43MjkxNDUtLjYzMzI3NiAxLjM1ODg2LTEuMTIyMTIgMS44ODkxNDctLjQ4ODg0NS41MzAyODctMS4wOTk5LjkzOTA1LTEuODEwOTQ3IDEuMjM3MzM3LS43MTEwNDYuMjk4Mjg2LTEuNTIyMDg0LjQ1Mjk1My0yLjQzMzExMi40NTI5NTN6bTAtMS45Nzc1MjhjLjU1NTUwNSAwIDEuMDQ0MzUtLjEyMTUyNCAxLjQ1NTQyMy0uMzUzNTI1LjQxMTA3NC0uMjMyLjc0NDM3Ny0uNTQxMzM1IDEuMDExMDItLjkxNjk1NC4yNjY2NDItLjM3NTYyLjQ1NTUxMy0uODA2NDc4LjU4ODgzNS0xLjI4MTUyNy4xMjIyMS0uNDc1MDQ5LjE4ODg3Mi0uOTYxMTQ1LjE4ODg3Mi0xLjQ1ODI5IDAtLjQ4NjA5Ni0uMDY2NjYxLS45NjExNDQtLjE4ODg3Mi0xLjQ0NzI0LS4xMjIyMTEtLjQ4NjA5Ny0uMzIyMTkzLS45MDU5MDctLjU4ODgzNi0xLjI4MTUyNy0uMjY2NjQyLS4zNzU2Mi0uNTk5OTQ1LS42NzM5MDctMS4wMTEwMTktLjkwNTkwNy0uNDExMDc0LS4yMzItLjg5OTkxOC0uMzUzNTI1LTEuNDU1NDIzLS4zNTM1MjUtLjU1NTUwNSAwLTEuMDQ0MzUuMTIxNTI0LTEuNDU1NDI0LjM1MzUyNS0uNDExMDczLjIzMi0uNzQ0Mzc2LjU0MTMzNC0xLjAxMTAxOS45MDU5MDctLjI2NjY0Mi4zNzU2Mi0uNDU1NTE0Ljc5NTQzLS41ODg4MzUgMS4yODE1MjYtLjEyMjIxMS40ODYwOTctLjE4ODg3Mi45NjExNDUtLjE4ODg3MiAxLjQ0NzI0MiAwIC40OTcxNDQuMDY2NjYuOTgzMjQuMTg4ODcyIDEuNDU4Mjg5LjEyMjIxLjQ3NTA0OS4zMjIxOTMuOTA1OTA3LjU4ODgzNSAxLjI4MTUyNy4yNjY2NDMuMzc1NjIuNTk5OTQ2LjY4NDk1NCAxLjAxMTAyLjkxNjk1NC40MTEwNzMuMjQzMDQ4Ljg5OTkxOC4zNTM1MjUgMS40NTU0MjMuMzUzNTI1em02LjQ4ODMtOS42NjY2OWgxLjg5OTgyN3YtMy40MDI2NzRoMi41MTA4ODN2My40MDI2NzVoMi4yNjY0NnYxLjg2NzA1MmgtMi4yNjY0NnY2LjA1NDEwOWMwIC4yNjUxNDMuMDExMTEuNDg2MDk2LjAzMzMzLjY4NDk1NC4wMjIyMi4xODc4MS4wNzc3Ny4zNTM1MjQuMTU1NTQxLjQ4NjA5Ni4wNzc3NzEuMTMyNTcyLjE5OTk4Mi4yMzIuMzY2NjM0LjI5ODI4Ny4xNjY2NTEuMDY2Mjg1LjM3Nzc0My4wOTk0MjguNjY2NjA2LjA5OTQyOC4xNzc3NjIgMCAuMzU1NTIzIDAgLjUzMzI4NS0uMDExMDQ3LjE3Nzc2Mi0uMDExMDQ4LjM1NTUyMy0uMDMzMTQzLjUzMzI4NS0uMDc3MzM0djEuOTMzMzM4Yy0uMjc3NzUzLjAzMzE0My0uNTU1NTA1LjA1NTIzOC0uODExMDM4LjA4ODM4MS0uMjY2NjQyLjAzMzE0My0uNTMzMjg1LjA0NDE5LS44MTEwMzcuMDQ0MTktLjY2NjYwNiAwLTEuMTk5ODkxLS4wNjYyODUtMS41OTk4NTUtLjE4NzgxLS4zOTk5NjMtLjEyMTUyMy0uNzIyMTU2LS4zMDkzMzMtLjk0NDM1OC0uNTUyMzgxLS4yMzMzMTMtLjI0MzA0OS0uMzc3NzQ0LS41NDEzMzUtLjQ2NjYyNS0uOTA1OTA3LS4wNzc3Ny0uMzY0NTczLS4xMzMzMjEtLjc4NDM4My0uMTQ0NDMxLTEuMjQ4Mzg0di02LjY4MzgyNWgtMS44OTk4Mjd2LTEuODg5MTQ3aC0uMDIyMjJ6IiBmaWxsPSJ3aGl0ZSI+PC9wYXRoPg0KPHBhdGggY2xhc3M9InRwLWxvZ29fX3N0YXIiIGZpbGw9IiMwMEI2N0EiIGQ9Ik0zMC4xNDE3MDcgMTEuMDcwMDVIMTguNjMxNjRMMTUuMDc2NDA4LjE3NzA3MWwtMy41NjYzNDIgMTAuODkyOTc3TDAgMTEuMDU5MDAybDkuMzIxMzc2IDYuNzM5MDYzLTMuNTY2MzQzIDEwLjg4MTkzIDkuMzIxMzc1LTYuNzI4MDE2IDkuMzEwMjY2IDYuNzI4MDE2LTMuNTU1MjMzLTEwLjg4MTkzIDkuMzEwMjY2LTYuNzI4MDE2eiI+PC9wYXRoPg0KPHBhdGggY2xhc3M9InRwLWxvZ29fX3N0YXItbm90Y2giIGZpbGw9IiMwMDUxMjgiIGQ9Ik0yMS42MzEzNjkgMjAuMjYxNjlsLS43OTk5MjgtMi40NjM2MjUtNS43NTUwMzMgNC4xNTM5MTR6Ij48L3BhdGg+DQo8L3N2Zz4=`;
            const star_ratings = `data:image/svg+xml;base64,PHN2ZyByb2xlPSJpbWciIGFyaWEtbGFiZWxsZWRieT0ic3RhclJhdGluZyIgdmlld0JveD0iMCAwIDI1MSA0NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCgkJCQkJCTxnIGNsYXNzPSJ0cC1zdGFyIj4NCgkJCQkJCTxwYXRoIGNsYXNzPSJ0cC1zdGFyX19jYW52YXMiIGZpbGw9IiMwMGI2N2EiIGQ9Ik0wIDQ2LjMzMDAwMmg0Ni4zNzU1ODZWMEgweiI+PC9wYXRoPg0KCQkJCQk8cGF0aCBjbGFzcz0idHAtc3Rhcl9fc2hhcGUiIGQ9Ik0zOS41MzM5MzYgMTkuNzExNDMzTDEzLjIzMDIzOSAzOC44MDA2NWwzLjgzODIxNi0xMS43OTc4MjdMNy4wMjExNSAxOS43MTE0MzNoMTIuNDE4OTc1bDMuODM3NDE3LTExLjc5ODYyNCAzLjgzNzQxOCAxMS43OTg2MjRoMTIuNDE4OTc1ek0yMy4yNzg1IDMxLjUxMDA3NWw3LjE4MzU5NS0xLjUwOTU3NiAyLjg2MjExNCA4LjgwMDE1MkwyMy4yNzg1IDMxLjUxMDA3NXoiIGZpbGw9IiNGRkYiPjwvcGF0aD4NCgkJCQk8L2c+DQoNCg0KCQkJCTxnIGNsYXNzPSJ0cC1zdGFyIj4NCgkJCQk8cGF0aCBjbGFzcz0idHAtc3Rhcl9fY2FudmFzIiBmaWxsPSIjMDBiNjdhIiBkPSJNNTEuMjQ4MTYgNDYuMzMwMDAyaDQ2LjM3NTU4N1YwSDUxLjI0ODE2MXoiPjwvcGF0aD4NCgkJCTxwYXRoIGNsYXNzPSJ0cC1zdGFyX19jYW52YXMtLWhhbGYiIGZpbGw9IiMwMGI2N2EiIGQ9Ik01MS4yNDgxNiA0Ni4zMzAwMDJoMjMuMTg3NzkzVjBINTEuMjQ4MTYxeiI+PC9wYXRoPg0KCQk8cGF0aCBjbGFzcz0idHAtc3Rhcl9fc2hhcGUiIGQ9Ik03NC45OTA5NzggMzEuMzI5OTFMODEuMTUwOTA4IDMwIDg0IDM5bC05LjY2MDIwNi03LjIwMjc4Nkw2NC4zMDI3OSAzOWwzLjg5NTYzNi0xMS44NDA2NjZMNTggMTkuODQxNDY2aDEyLjYwNTU3N0w3NC40OTk1OTUgOGwzLjg5NTYzNyAxMS44NDE0NjZIOTFMNzQuOTkwOTc4IDMxLjMyOTkwOXoiIGZpbGw9IiNGRkYiPjwvcGF0aD4NCgk8L2c+DQoNCg0KCTxnIGNsYXNzPSJ0cC1zdGFyIj4NCgk8cGF0aCBjbGFzcz0idHAtc3Rhcl9fY2FudmFzIiBmaWxsPSIjMDBiNjdhIiBkPSJNMTAyLjUzMjIwOSA0Ni4zMzAwMDJoNDYuMzc1NTg2VjBoLTQ2LjM3NTU4NnoiPjwvcGF0aD4NCjxwYXRoIGNsYXNzPSJ0cC1zdGFyX19jYW52YXMtLWhhbGYiIGZpbGw9IiMwMGI2N2EiIGQ9Ik0xMDIuNTMyMjA5IDQ2LjMzMDAwMmgyMy4xODc3OTNWMGgtMjMuMTg3NzkzeiI+PC9wYXRoPg0KPHBhdGggY2xhc3M9InRwLXN0YXJfX3NoYXBlIiBkPSJNMTQyLjA2Njk5NCAxOS43MTE0MzNMMTE1Ljc2MzI5OCAzOC44MDA2NWwzLjgzODIxNS0xMS43OTc4MjctMTAuMDQ3MzA0LTcuMjkxMzkxaDEyLjQxODk3NWwzLjgzNzQxOC0xMS43OTg2MjQgMy44Mzc0MTcgMTEuNzk4NjI0aDEyLjQxODk3NXpNMTI1LjgxMTU2IDMxLjUxMDA3NWw3LjE4MzU5NS0xLjUwOTU3NiAyLjg2MjExMyA4LjgwMDE1Mi0xMC4wNDU3MDgtNy4yOTA1NzZ6IiBmaWxsPSIjRkZGIj48L3BhdGg+DQo8L2c+DQoNCg0KPGcgY2xhc3M9InRwLXN0YXIiPg0KPHBhdGggY2xhc3M9InRwLXN0YXJfX2NhbnZhcyIgZmlsbD0iIzAwYjY3YSIgZD0iTTE1My44MTU0NTggNDYuMzMwMDAyaDQ2LjM3NTU4NlYwaC00Ni4zNzU1ODZ6Ij48L3BhdGg+DQo8cGF0aCBjbGFzcz0idHAtc3Rhcl9fY2FudmFzLS1oYWxmIiBmaWxsPSIjMDBiNjdhIiBkPSJNMTUzLjgxNTQ1OCA0Ni4zMzAwMDJoMjMuMTg3NzkzVjBoLTIzLjE4Nzc5M3oiPjwvcGF0aD4NCjxwYXRoIGNsYXNzPSJ0cC1zdGFyX19zaGFwZSIgZD0iTTE5My4zNDgzNTUgMTkuNzExNDMzTDE2Ny4wNDU0NTcgMzguODAwNjVsMy44Mzc0MTctMTEuNzk3ODI3LTEwLjA0NzMwMy03LjI5MTM5MWgxMi40MTg5NzRsMy44Mzc0MTgtMTEuNzk4NjI0IDMuODM3NDE4IDExLjc5ODYyNGgxMi40MTg5NzR6TTE3Ny4wOTI5MiAzMS41MTAwNzVsNy4xODM1OTUtMS41MDk1NzYgMi44NjIxMTQgOC44MDAxNTItMTAuMDQ1NzA5LTcuMjkwNTc2eiIgZmlsbD0iI0ZGRiI+PC9wYXRoPg0KPC9nPg0KDQoNCjxnIGNsYXNzPSJ0cC1zdGFyIj4NCjxwYXRoIGNsYXNzPSJ0cC1zdGFyX19jYW52YXMiIGZpbGw9IiNkY2RjZTYiIGQ9Ik0yMDUuMDY0NDE2IDQ2LjMzMDAwMmg0Ni4zNzU1ODdWMGgtNDYuMzc1NTg3eiI+PC9wYXRoPg0KPHBhdGggY2xhc3M9InRwLXN0YXJfX2NhbnZhcy0taGFsZiIgZmlsbD0iIzAwYjY3YSIgZD0iTTIwNS4wNjQ0MTYgNDYuMzMwMDAyaDIzLjE4Nzc5M1YwaC0yMy4xODc3OTN6Ij48L3BhdGg+DQo8cGF0aCBjbGFzcz0idHAtc3Rhcl9fc2hhcGUiIGQ9Ik0yNDQuNTk3MDIyIDE5LjcxMTQzM2wtMjYuMzAyOSAxOS4wODkyMTggMy44Mzc0MTktMTEuNzk3ODI3LTEwLjA0NzMwNC03LjI5MTM5MWgxMi40MTg5NzRsMy44Mzc0MTgtMTEuNzk4NjI0IDMuODM3NDE4IDExLjc5ODYyNGgxMi40MTg5NzV6bS0xNi4yNTU0MzYgMTEuNzk4NjQybDcuMTgzNTk1LTEuNTA5NTc2IDIuODYyMTE0IDguODAwMTUyLTEwLjA0NTcwOS03LjI5MDU3NnoiIGZpbGw9IiNGRkYiPjwvcGF0aD4NCjwvZz4NCjwvc3ZnPg==`;


            const egBanner = document.querySelector("#skip-to-content-link-target > div.PageHeading_root__33XZK");
            // clearing default html and stuff
            egBanner.innerHTML = "";

            // banner html markup
            const egBannerNewMarkup = `

                <div class="eg-banner-container">
                    <!--- Left Div -->
                    <div class="eg-left-div">
                        <h1>REFINANCE SAVINGS CALCULATOR</h1>
                        <p>Compare your current loan with that we can offer. You'll be blown away at how much time and money you'll save by switching to Athena and paying your home loan off faster.</p>
                    </div>

                    <!--- Right Div -->
                    <div class="eg-right-div">
                        <!-- div of fee rates -->
                        <div>
                            <div>
                                <h3>FEE-FREE LOW RATES FROM</h3>
                                <div>
                                    <h1>3.79</h1>
                                    <div><span>%</span><span>P.A.</span></div>
                                </div>
                            </div>
                            <div>
                                <h1>VARIABLE &amp; COMPARISON^</h1>
                            </div>
                        </div>

                        <!-- turst widget -->
                        <div class="eg-trust_widget">
                            <!--- logo -->
                            <img src="${trust_pilot_logo}" alt="" class="eg-trust_pilot_logo">

                            <!--- bussiness info -->
                            <div class="eg-bussiness_info">
                               <span>Excellent</span>
                               <img src="${star_ratings}" alt="" class="eg-star_ratings">
                               <a target="_blank" href="https://au.trustpilot.com/review/athena.com.au?utm_medium=trustbox&amp;utm_source=Carousel">Based on <strong class="bold-underline">1,774 reviews</strong></a> 
                            </div>
                        </div>
                        <!-- trust widget close -->
                    </div>
                </div>
                                    `;

            // updating new banner
            egBanner.innerHTML = egBannerNewMarkup;

        }


        /* Initialize variation */
        waitForElement("#skip-to-content-link-target > div.PageHeading_root__33XZK", init, 50, 15000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();