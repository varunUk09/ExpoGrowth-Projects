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

            const popupMarkup = document.querySelector("#camp_popup");

            // cloning html markup
            let egNewPopupOverlay = popupMarkup.cloneNode(true);
            egNewPopupOverlay.setAttribute("id", "eg-popup-999");

            // appending it to dom
            popupMarkup.insertAdjacentElement("beforebegin", egNewPopupOverlay);

            const egPopupBox = document.querySelector("#eg-popup-999 > div.popup.central > #camp_content > div.configcta");
            // removing existing html
            egPopupBox.innerHTML = "";

            // new html
            const popupHtml = `
            <!--First div-->
            <div class="eg-popup-title">
                <h1>Bob Le Menuisier se bat au quotidien pour votre pouvoir d'achat.</h1>
            </div>

            <!--Second div-->
            <div class="eg-popup-title-2">
                <h2>Obtenez des remises supplémentaires en appelant le : </h2>
            </div

            <!--phone block-->
            <a href="tel:+33805542084" class="eg-phone">
                <img src="data:image/svg+xml;base64,DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjYwMHB4IiBoZWlnaHQ9IjYwMHB4IiB2ZXJzaW9uPSIxLjEiIHNoYXBlLXJlbmRlcmluZz0iZ2VvbWV0cmljUHJlY2lzaW9uIiB0ZXh0LXJlbmRlcmluZz0iZ2VvbWV0cmljUHJlY2lzaW9uIiBpbWFnZS1yZW5kZXJpbmc9Im9wdGltaXplUXVhbGl0eSIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiDQp2aWV3Qm94PSIwIDAgNjAwIDYwMCINCiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+DQogPGcgaWQ9IkxheWVyX3gwMDIwXzEiPg0KICA8bWV0YWRhdGEgaWQ9IkNvcmVsQ29ycElEXzBDb3JlbC1MYXllciIvPg0KICA8cmVjdCBmaWxsPSJub25lIiB3aWR0aD0iNjAwIiBoZWlnaHQ9IjYwMCIvPg0KICA8cGF0aCBmaWxsPSIjOTNCQUYwIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik00ODUgNTIwbC0yNjcgNTZjLTksMiAtMTgsMCAtMjUsLTUgLTcsLTQgLTEyLC0xMiAtMTQsLTIxbC04MiAtMzkwIDAgMCAwIDAgLTggLTQxYy0yLC05IDAsLTE4IDUsLTI1IDQsLTcgMTIsLTEzIDIxLC0xNGwyNjcgLTU2YzksLTIgMTgsMCAyNSw1IDcsNCAxMiwxMiAxNCwyMSAzMCwxNDMgNjIsMjg4IDkwLDQzMSAyLDkgMCwxOCAtNSwyNSAtNCw3IC0xMiwxMyAtMjEsMTRsMCAwem0tMTI2IC0zOWMzLDExIC01LDIyIC0xNiwyNSAtMTEsMiAtMjMsLTUgLTI1LC0xNyAtMiwtMTEgNSwtMjIgMTYsLTI1IDEyLC0yIDIzLDUgMjUsMTd6bS0yNDAgLTMzOGwyODQgLTU5IC02IC0yOWMwLDAgMCwtMSAwLC0xIDAsLTIgLTIsLTQgLTQsLTUgLTEsLTEgLTQsLTIgLTYsLTEgMCwwIC0xLDAgLTEsMGwtMjY2IDU1Yy0zLDEgLTUsMiAtNiw0IC0xLDIgLTIsNSAtMSw3bDYgMjl6bTI4OSAtMzZsLTI4NCA2MCA1OSAyODQgMjg1IC01OSAtNjAgLTI4NXptNjUgMzA5bC0yODUgNTkgMTUgNzFjMCwyIDIsNCA0LDUgMSwxIDQsMiA2LDFsMjY3IC01NWMwLDAgMCwwIDEsLTEgMiwwIDQsLTIgNSwtMyAxLC0yIDIsLTQgMSwtNiAwLC0xIDAsLTEgMCwtMmwtMTQgLTY5eiIvPg0KIDwvZz4NCjwvc3ZnPg0KDQo=" alt="">
                <span>0 805 542 084</span>
            </a>

            <!--Fourth div-->
            <div class="eg-services">
                <h3>Service &amp; ppel gratuit.</h3>
                <div>
                    <!--Service 1-->
                    <div class="eg-service">
                        <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8IS0tIENyZWF0b3I6IENvcmVsRFJBVyBYOCAtLT4NCjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNjAwcHgiIGhlaWdodD0iNjAwcHgiIHZlcnNpb249IjEuMSIgc2hhcGUtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iIHRleHQtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iIGltYWdlLXJlbmRlcmluZz0ib3B0aW1pemVRdWFsaXR5IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCINCnZpZXdCb3g9IjAgMCA2MDAgNjAwIg0KIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiA8ZyBpZD0iTGF5ZXJfeDAwMjBfMSI+DQogIDxtZXRhZGF0YSBpZD0iQ29yZWxDb3JwSURfMENvcmVsLUxheWVyIi8+DQogIDxyZWN0IGZpbGw9Im5vbmUiIHdpZHRoPSI2MDAiIGhlaWdodD0iNjAwIi8+DQogIDxnPg0KICAgPHBhdGggZmlsbD0iIzkzQkFGMCIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNNTUxIDQyMmwtNDI5IDkzYy0xMCwyIC0xOSwwIC0yNywtNSAtOCwtNSAtMTQsLTEzIC0xNiwtMjNsLTQ2IC0yMTAgLTMgLTE1IDAgMCAtOSAtNDFjLTIsLTkgMCwtMTkgNSwtMjcgNSwtOCAxNCwtMTQgMjMsLTE2bDQyOSAtOTNjMTAsLTIgMjAsMCAyNyw1IDEsMSAxLDEgMSwxIDgsNSAxMywxMyAxNSwyMmwxMiA1NSAxMCA0NyAwIDAgMzYgMTY0YzIsOSAwLDE5IC01LDI3IC01LDggLTEzLDE0IC0yMywxNnptLTI3MCAtMjhjLTgsMSAtMTYsLTQgLTE4LC0xMiAtMiwtOSAzLC0xNyAxMiwtMTlsNTMgLTExYzgsLTIgMTYsMyAxOCwxMiAyLDggLTMsMTYgLTEyLDE4bC01MyAxMnptLTEzMiAyOWMtOCwxIC0xNywtNCAtMTksLTEyIC0xLC05IDQsLTE3IDEyLC0xOWw4MiAtMThjOCwtMSAxNyw0IDE5LDEyIDEsOSAtNCwxNyAtMTIsMTlsLTgyIDE4em0tNzggLTEyMWw0MzkgLTk1IC03IC0zMSAtNDM5IDk1IDcgMzF6bTQ0NSAtNjVsLTQzOSA5NSAzMiAxNDhjMCwyIDEsMyAyLDMgMiwxIDMsMiA1LDFsNDI4IC05MmMyLC0xIDMsLTIgMywtMyAxLC0xIDEsLTIgMSwtNGwtMzIgLTE0OHptLTQ1OSAzbDQzOSAtOTQgLTUgLTI2YzAsLTEgLTEsLTMgLTIsLTNsMCAwYy0yLC0xIC0zLC0xIC00LC0xbC00MjkgOTJjLTIsMSAtMywyIC0zLDMgLTEsMSAtMSwyIC0xLDRsNSAyNXptNDczIC04NmwzIDE0IC0zIC0xNHoiLz4NCiAgPC9nPg0KIDwvZz4NCjwvc3ZnPg0K" alt="">
                        <h4>Solutions de paiement</h4>
                    </div>

                    <!--Service 2-->
                    <div class="eg-service">
                        <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8IS0tIENyZWF0b3I6IENvcmVsRFJBVyBYOCAtLT4NCjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNjAwcHgiIGhlaWdodD0iNjAwcHgiIHZlcnNpb249IjEuMSIgc2hhcGUtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iIHRleHQtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iIGltYWdlLXJlbmRlcmluZz0ib3B0aW1pemVRdWFsaXR5IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCINCnZpZXdCb3g9IjAgMCA2MDAgNjAwIg0KIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiA8ZyBpZD0iTGF5ZXJfeDAwMjBfMSI+DQogIDxtZXRhZGF0YSBpZD0iQ29yZWxDb3JwSURfMENvcmVsLUxheWVyIi8+DQogIDxyZWN0IGZpbGw9Im5vbmUiIHdpZHRoPSI2MDAiIGhlaWdodD0iNjAwIi8+DQogIDxwYXRoIGZpbGw9IiM5M0JBRjAiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTQyMCA0NzVsMTE4IDAgMCAtMzI0IC0xMzQgMCAwIDQ4YzAsOCAtNywxNSAtMTUsMTVsLTEyNyAwYy05LDAgLTE2LC03IC0xNiwtMTVsMCAtNDggLTY4IDBjLTksMCAtMTYsLTcgLTE2LC0xNiAwLC04IDcsLTE1IDE2LC0xNWw4NCAwIDAgMCAxMjcgMCAwIDAgMTY1IDBjOCwwIDE1LDcgMTUsMTVsMCAzNTVjMCw5IC03LDE2IC0xNSwxNmwtMTI3IDBjMCwxIC0xLDIgLTEsNCAtMiw0IC01LDggLTgsMTEgLTYsNiAtMTUsMTAgLTI0LDEwbC0xMzcgMGMtNCwwIC05LC0xIC0xMywtMiAtNCwtMiAtOCwtNSAtMTEsLThsLTE2IC0xNSAtMTIwIDBjLTksMCAtMTYsLTcgLTE2LC0xNmwwIC02OWMwLC04IDcsLTE1IDE2LC0xNSA5LDAgMTYsNyAxNiwxNWwwIDU0IDczIDAgLTI0IC0yNGMtMywtMyAtNCwtNyAtNCwtMTFsMCAtMzIgLTEwIC0xMCAtMiAyYy0zLDMgLTcsNCAtMTEsNCAtNSwwIC04LC0yIC0xMSwtNGwtODkgLTg5Yy0zLC0zIC00LC03IC00LC0xMSAwLC0xNCAxNywtMjEgMjYsLTExbDc4IDc4IDkyIC05MiAtMTkxIC0xNzljLTQsLTMgLTUsLTggLTUsLTEyIDAsLTE0IDE2LC0yMCAyNiwtMTFsMjAzIDE5MGMzLDMgNSw4IDUsMTIgMCw1IC0yLDggLTUsMTFsLTggOCAxNiAxNiA4MyAwIDAgMGMyLDAgNCwwIDcsMmw3NCAzN2M2LDIgMTAsOCAxMCwxNCAwLDQxIC01Myw0MSAtNTMsNDEgLTIsMCAtMywwIC01LDBsLTM2IC0xMiAtNyAwIDAgMyA3NyA3NyAwIDBjMSwxIDIsMiAyLDN6bS00NyAtMzI0bC05NSAwIDAgMzIgOTUgMCAwIC0zMnptLTIwMyAyMjVsMTQgMTRjMywzIDUsNyA1LDExbDAgMCAwIDMyIDQ2IDQ2YzAsMCAwLDAgMCwxbDIwIDE5YzAsMCAwLDEgMSwxIDAsMCAxLDAgMSwwbDEzNyAwYzEsMCAxLDAgMiwtMSAwLDAgMSwtMSAxLC0xIDAsMCAwLC0xIDAsLTIgMCwwIDAsLTEgLTEsLTJsMCAwIDAgMCAtODIgLTgyYy0zLC0zIC00LC03IC00LC0xMWwwIC0yNWMwLC04IDcsLTE1IDE1LC0xNWwyNiAwYzIsMCA0LDAgNiwxbDM0IDExYzMsMCAxMCwtMSAxNSwtM2wtNTkgLTI5IC04NSAwYy01LDAgLTksLTIgLTEyLC01bC0yMCAtMjAgLTYwIDYweiIvPg0KIDwvZz4NCjwvc3ZnPg0K" alt="">
                        <h4>livraison à domicile</h4>
                    </div>

                    <!--Service 3-->
                    <div class="eg-service">
                        <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8IS0tIENyZWF0b3I6IENvcmVsRFJBVyBYOCAtLT4NCjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNjAwcHgiIGhlaWdodD0iNjAwcHgiIHZlcnNpb249IjEuMSIgc2hhcGUtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iIHRleHQtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iIGltYWdlLXJlbmRlcmluZz0ib3B0aW1pemVRdWFsaXR5IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCINCnZpZXdCb3g9IjAgMCA2MDAgNjAwIg0KIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiA8ZyBpZD0iTGF5ZXJfeDAwMjBfMSI+DQogIDxtZXRhZGF0YSBpZD0iQ29yZWxDb3JwSURfMENvcmVsLUxheWVyIi8+DQogIDxyZWN0IGZpbGw9Im5vbmUiIHdpZHRoPSI2MDAiIGhlaWdodD0iNjAwIi8+DQogIDxnIGlkPSJfMjgxMDc2NzQ5MjE3NiI+DQogICA8cGF0aCBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0iIzkzQkFGMCIgc3Ryb2tlLXdpZHRoPSI2LjQ3MzY1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0xNTAgMzUwbDIwIDAgMCAtMTIwIC0yMCAwYy0zMywwIC02MCwyNyAtNjAsNjBsMCAwYzAsMzMgMjcsNjAgNjAsNjB6Ii8+DQogICA8cGF0aCBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0iIzkzQkFGMCIgc3Ryb2tlLXdpZHRoPSI2LjQ3MzY1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik00NzAgMzUwbC0yMCAwIDAgLTEyMCAyMCAwYzM0LDAgNjAsMjcgNjAsNjBsMCAwYzAsMzMgLTI2LDYwIC02MCw2MHoiLz4NCiAgIDxwYXRoIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSIjOTNCQUYwIiBzdHJva2Utd2lkdGg9IjYuNDczNjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTE3MCAyMzBsMCAtNDBjMCwtNjcgNzQsLTEyMCAxNDAsLTEyMGwwIDBjNjYsMCAxNDAsNTMgMTQwLDEyMGwwIDQwIi8+DQogICA8cGF0aCBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0iIzkzQkFGMCIgc3Ryb2tlLXdpZHRoPSI2LjQ3MzY1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik00NTAgMzUwYzAsNDQgLTQwLDgwIC04MCw4MCIvPg0KICAgPHBhdGggZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9IiM5M0JBRjAiIHN0cm9rZS13aWR0aD0iNi40NzM2NSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNNDc2IDQ0MGM3LDUgMTQsMTEgMjAsMTcgMjIsMjEgMzQsNDYgMzQsNzMiLz4NCiAgIDxwYXRoIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSIjOTNCQUYwIiBzdHJva2Utd2lkdGg9IjYuNDczNjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTcwIDUzMGMwLC01OSA2MCwtMTA5IDE0NCwtMTMwIi8+DQogICA8cGF0aCBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0iIzkzQkFGMCIgc3Ryb2tlLXdpZHRoPSI2LjQ3MzY1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik0zNTAgNDUwbC00MCAwYy0xMSwwIC0yMCwtOSAtMjAsLTIwbDAgMGMwLC0xMSA5LC0yMCAyMCwtMjBsNDAgMGMxMSwwIDIwLDkgMjAsMjBsMCAwYzAsMTEgLTksMjAgLTIwLDIweiIvPg0KICA8L2c+DQogIDxwYXRoIGZpbGw9IiM5M0JBRjAiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTI0MCAzMzZjLTYsLTUgLTYsLTE1IDAsLTIxIDUsLTYgMTQsLTYgMjAsMCAxMywxMSAzMCwxNyA0OCwxNyAxOCwwIDM2LC02IDQ4LC0xNyA2LC02IDE1LC02IDIxLDAgNSw2IDUsMTYgLTEsMjEgLTE4LDE3IC00MywyNSAtNjgsMjUgLTI1LDAgLTUwLC04IC02OCwtMjV6Ii8+DQogPC9nPg0KPC9zdmc+DQo=" alt="">
                        <h4>Service client</h4>
                    </div>

                    <!--Service 4-->
                    <div class="eg-service">
                        <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8IS0tIENyZWF0b3I6IENvcmVsRFJBVyBYOCAtLT4NCjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNjAwcHgiIGhlaWdodD0iNjAwcHgiIHZlcnNpb249IjEuMSIgc2hhcGUtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iIHRleHQtcmVuZGVyaW5nPSJnZW9tZXRyaWNQcmVjaXNpb24iIGltYWdlLXJlbmRlcmluZz0ib3B0aW1pemVRdWFsaXR5IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCINCnZpZXdCb3g9IjAgMCA2MDAgNjAwIg0KIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiA8ZyBpZD0iTGF5ZXJfeDAwMjBfMSI+DQogIDxtZXRhZGF0YSBpZD0iQ29yZWxDb3JwSURfMENvcmVsLUxheWVyIi8+DQogIDxyZWN0IGZpbGw9Im5vbmUiIHdpZHRoPSI2MDAiIGhlaWdodD0iNjAwIi8+DQogIDxwYXRoIGZpbGw9IiM5M0JBRjAiIGQ9Ik0yODMgNzRjLTEyLDMgLTIxLDE5IC0xNCwzOCA2LDE2IDEsMzQgMCw1NCAtMSwxNyAtNSwzNSAtNyw1MyAtMywxNyAtNSwzNCAtOCw1MiAtNiwzIC05LDMgLTEyLDkgLTMsNSAtMiwxMiAxLDE2IDEwLDYgMTEsLTMgMSwyOSAtMywxMCAtMTksNTQgLTI2LDYzIC0xNCwxIC0yNCwtMiAtMzAsOCAtNywxMCAxLDIyIDEwLDI0IDAsOCAtNTksMTA3IC01OSwxMDcgLTksMyAtMjAsLTIgLTI4LDQgLTcsNSAtOCwxNSAtMywyMyA2LDggMTQsNyAyNSw3IDEzLDAgOTEsMCA5NiwtMSAxOSwtMiAyMiwtMjkgLTIsLTMyIDIsLTEwIDE5LC0yOSAyNywtMzUgNDUsLTM3IDEwMSwtOSAxMTksMzQgMCwwIDAsMCAwLDBsLTIgMWMtNiwyIC0xNCw0IC0xNSwxMyAtMSwxMCA1LDE4IDEzLDE5IDYsMSAyNSwxIDMxLDFsNjUgMGMxMSwwIDIwLDEgMjYsLTYgNywtNyA1LC0xOCAtMSwtMjMgLTksLTggLTE5LC0yIC0yOCwtNSAtMSwwIC01OSwtMTAxIC02MCwtMTA3IDksLTMgMTcsLTEzIDEwLC0yNCAtNiwtMTEgLTE2LC03IC0zMCwtOCAtOCwtMTcgLTI5LC03NSAtMjksLTg3IDgsLTggOSwtMTcgMiwtMjUgLTEwLC0xMCAtNiw2IC0xMSwtMjUgLTYsLTMzIC0xNSwtOTUgLTE1LC0xMjkgMCwtOCAxLC05IDMsLTE1IDQsLTE2IC00LC0yOSAtMTYsLTMzIC0xLC03IDEsLTIwIC0xLC0yNSAtNSwtMTIgLTI1LC0xNCAtMzEsMCAtMiw2IDAsMTcgLTEsMjV6bS0xMDUgNDU0YzE3LDAgMTEsMSAxOCwtMTQgNCwtNyA2LC0xMSA5LC0xNiA0NSwtNzEgMTM5LC03NSAxODgsLTMgMTIsMTcgMTAsMjAgMTcsMzNsMTMgMGMtMiwtNiAtNDQsLTgwIC01MiwtOTMgLTIsLTUgLTUsLTEwIC03LC0xNCAtMjIsLTEgLTczLDAgLTk4LDBsLTI1IDBjLTQsMCAtNCwwIC02LDMgLTEsMyAtMiw1IC00LDdsLTM4IDY5Yy0zLDQgLTE0LDI0IC0xNSwyOHptNzcgLTE0MGw5MSAwYzAsLTMgLTYsLTE3IC03LC0xOSAtNCwtMTAgLTE1LC00MiAtMTcsLTUzIC0xLC00IC0yLC04IC0zLC0xMmwtMzcgMGMtMywxNSAtOCwzMSAtMTMsNDQgLTIsNyAtNCwxMyAtNywyMCAtMSw1IC03LDE3IC03LDIwem0yOSAtMTE3bDMyIDBjLTYsLTI1IC0xMywtNzkgLTE2LC0xMDcgLTEsNyAtMTMsOTUgLTE2LDEwN3oiLz4NCiA8L2c+DQo8L3N2Zz4NCg==" alt="">
                        <h4>Menuiseries sur-mesure</h4>
                    </div>
                </div>
            </div>
            `;

            egPopupBox.innerHTML = popupHtml;

            // setting the close button postition in our cloned popupoverlay
            const egCloseBtn = document.querySelector("#eg-popup-999 > div.popup.central > span#camp_popup_close");

            egPopupBox.insertAdjacentElement("afterbegin", egCloseBtn);

            // removing default style which is adding to overlay onload
            document.querySelector("#eg-popup-999").style["display"] = null;

            // closing popup on button click
            egCloseBtn.addEventListener("click", () => {
                document.querySelector("#eg-popup-999").style.display = "none";
            });
        }


        /* Initialize variation */
        waitForElement(".gtm-popup.overlay", init, 50, 15000);
    } catch (e) {
        if (debug) console.log(e, "error in Test" + variation_name);
    }
})();