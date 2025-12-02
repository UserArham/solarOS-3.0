#include <vector>
#include <string>
#include <iostream>

class FileSystem {
    std::vector<std::string> files;
public:
    void createFile(const std::string &name) {
        files.push_back(name);
        std::cout << "File created: " << name << "\n";
    }
    void listFiles() {
        std::cout << "Files:\n";
        for (auto &f : files) std::cout << "- " << f << "\n";
    }
};
