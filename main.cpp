#include <iostream>
#include <string>
#include "filesystem.h"

int main() {
    std::cout << "SolarOS 3.0X (2009) C++ Kernel Simulation\n";
    std::cout << "Initializing filesystem...\n";

    FileSystem fs;
    fs.createFile("readme.txt");
    fs.listFiles();

    std::string cmd;
    while (true) {
        std::cout << "SOLAR-CPP> ";
        std::getline(std::cin, cmd);
        if (cmd == "exit") break;
        else if (cmd == "ls") fs.listFiles();
        else std::cout << "Unknown command\n";
    }
    return 0;
}
