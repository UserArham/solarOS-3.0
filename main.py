from solaros.ui.boot import boot_sequence
from solaros.cli import SolarCLI

class SolarOS:
    VERSION = "3.0 X (2009)"

    def __init__(self):
        self.cli = SolarCLI()

    def boot(self):
        boot_sequence(self.VERSION)
        self.cli.start()
