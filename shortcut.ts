[
    {
        name: "preview",
        key: ["cmd + p", "ctrl + p"],
        monaco: KeyMod.CtrlCmd | KeyCode.KeyP,
        preventDefault: true,
        command: async () => {
            await this.service.rightmenu.toggle(this.service.rightmenu.top[0]);
        }
    }
]