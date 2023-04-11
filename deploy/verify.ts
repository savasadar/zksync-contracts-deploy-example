import { HardhatRuntimeEnvironment } from "hardhat/types";

export default async function (hre: HardhatRuntimeEnvironment) {
    /*
    await hre.run("verify:verify", {
        address: "0x752eA22218a0a0954b8BEbaD20FfCfBB236B756E",
        contract: "Greeter",
        constructorArguments: ["Hi there!"]
    });
    */

    await hre.run("verify:verify", {
        address: "0xDf8Bd9CDEee63C775890Ba23eabAaa85d54aC5a3",
        contract: "Hunter",
        constructorArguments: []
    });
}