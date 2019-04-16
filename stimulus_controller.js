(() => {
    const application = Stimulus.Application.start()

    application.register("stimulus", class extends Stimulus.Controller {
        static get targets() {
            return ["input", "preview"]
        }

        checkPreview() {
            this.previewTarget.innerHTML = this.inputTarget.value
        }
    })
})()
