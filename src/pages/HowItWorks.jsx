import React from "react";
import {
  questionMark,
  connectMetamask,
  navigateCampaigns,
  campaign,
  donation,
  confirmTransaction,
  navigateDashboard,
  createCampaignNav,
  campaignForm,
  addressCampaign,
  etherScan,
} from "../assets";
import { Navbar, Footer, Section } from "../components";
const HowItWorks = () => {
  return (
    <div className="w-full pt-[90px] pb-[350px]">
      <Navbar />

      <div className="container mx-auto">
        <Section
          title="How It Works"
          subtitle={
            <>
              Whether you're looking to create a fundraising campaign, support a
              cause, or just learn about blockchain and cryptocurrencies, this
              tutorial will guide you through the key features of the platform.
              <br />
              <br />
              Learn how to launch your own campaign, donate Ethereum to a
              campagin using{" "}
              <a
                href="https://chromewebstore.google.com/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"
                target="_blank"
                className="text-blue-500"
              >
                MetaMask
              </a>{" "}
              wallet, verify transactions on{" "}
              <a
                href="https://sepolia.etherscan.io/"
                target="_blank"
                className="text-blue-500"
              >
                Etherscan
              </a>
              , and explore the transparency of blockchain technology and the
              platform.
              <br />
              <br />
              Follow these steps to make the most out of your experience on the
              platform.
            </>
          }
          flexDirection="md:flex-row-reverse"
          imageUrl={questionMark}
        />
        <div className=" m-auto p-5 gap-5 lg:p-10">
          <div
            className={`bg-grey-50 dark:bg-grey-700 dark:text-grey-50 w-full`}
          >
            <h2
              className={`container m-auto text-center text-grey-950 text-3xl font-epilogue font-bold p-10 lg:text-5xl dark:text-grey-50 `}
            >
              Transparency and Accountability
            </h2>

            <p className="text-grey-950 text-lg lg:text-xl font-epilogue pb-10 dark:text-grey-50">
              By using tools like Etherscan, you are able to see detailed
              information about the platform's smart contract. This includes
              things like the history of donations and creation of campaigns,
              the wallet addresses that were involved, and other important
              details about the smart contract of the platform.
            </p>

            <p className="text-grey-950 text-lg lg:text-xl font-epilogue pb-10 dark:text-grey-50">
              This visibility allows you to track the origins of
              cryptocurrencies and the balances stored or received by specific
              wallets. All data is securely stored on an immutable blockchain,
              ensuring transparency and accountability, which provides peace of
              mind when supporting campaigns and ultimately interacting with the
              the platform .
            </p>

            <p className="text-grey-950 text-lg lg:text-xl font-epilogue pb-10 dark:text-grey-50">
              Here you can access Etherscan of the platform's smart contract:
            </p>

            <a
              href="https://sepolia.etherscan.io/address/0xe2044D2332c0C987F9a378f5AecCd0B7353Bd880"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 pb-2 text-lg lg:text-xl font-epilogue break-words"
            >
              https://sepolia.etherscan.io/address/0xe2044D2332c0C987F9a378f5AecCd0B7353Bd880
            </a>
          </div>

          <div
            className={`bg-grey-50 dark:bg-grey-700 dark:text-grey-50 w-full`}
          >
            <h2
              className={`container m-auto text-center text-grey-950 text-3xl font-epilogue font-bold p-10 lg:text-5xl dark:text-grey-50 `}
            >
              How To Donate To a Campaign
            </h2>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div class="text-center">
              <img
                src={connectMetamask}
                alt="Step 1 Image"
                class="w-full h-[250px] lg:h-[350px] object-cover mx-auto mb-4 rounded-lg shadow-2xl"
              ></img>

              <h3 class="text-grey-950 text-xl font-bold mb-2 dark:text-grey-50">
                1. Connect to the platform by{" "}
                <a
                  href="https://chromewebstore.google.com/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"
                  target="_blank"
                  className="text-blue-500"
                >
                  MetaMask
                </a>{" "}
                extension.
              </h3>

              <p className="text-grey-950 text-sm lg:text-md font-epilogue pb-10 dark:text-grey-50">
                Make sure you have the extension installed in your web browser.
              </p>
            </div>

            <div class="text-center">
              <img
                src={navigateCampaigns}
                alt="Step 2 Image"
                className="w-full h-[250px] lg:h-[350px] object-cover mx-auto mb-4 rounded-lg shadow-2xl"
              ></img>

              <h3 class="text-grey-950 text-xl font-bold mb-2 dark:text-grey-50">
                2. Navigate to the "Campaigns" page on the platform.
              </h3>

              <p className="text-grey-950 text-sm lg:text-md font-epilogue pb-10 dark:text-grey-50">
                This is where you can see all available campaigns created by
                other users.
              </p>
            </div>

            <div class="text-center">
              <img
                src={campaign}
                alt="Step 3 Image"
                className="w-full h-[250px] lg:h-[350px] object-cover mx-auto mb-4 rounded-lg shadow-2xl"
              ></img>

              <h3 class="text-grey-950 text-xl font-bold mb-2 dark:text-grey-50">
                3. Click on the campaign to view its details.
              </h3>

              <p className="text-grey-950 text-sm lg:text-md font-epilogue pb-10 dark:text-grey-50">
                Here you can find more information about a campaign, including
                its story, progress towards goals and donation details.
              </p>
            </div>

            <div class="text-center">
              <img
                src={donation}
                alt="Step 4 Image"
                className="w-full h-[250px] lg:h-[350px] object-cover mx-auto mb-4 rounded-lg shadow-2xl"
              ></img>
              <h3 class="text-grey-950 text-xl font-bold mb-2 dark:text-grey-50">
                4. Enter the amount of Ethereum to donate
              </h3>
              <p className="text-grey-950 text-sm lg:text-md font-epilogue pb-10 dark:text-grey-50">
                Simply specify the desired quantity of Ethereum you wish to
                contribute towards the campaign.
              </p>
            </div>

            <div class="text-center">
              <img
                src={confirmTransaction}
                alt="Step 4 Image"
                className="w-full h-[250px] lg:h-[350px] object-cover mx-auto mb-4 rounded-lg shadow-2xl"
              ></img>
              <h3 class="text-grey-950 text-xl font-bold mb-2 dark:text-grey-50">
                5. Confirm the transaction
              </h3>
              <p className="text-grey-950 text-sm lg:text-md font-epilogue pb-10 dark:text-grey-50">
                After clicking "Donate," you will be prompted to confirm the
                transaction through your{" "}
                <a
                  href="https://chromewebstore.google.com/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"
                  target="_blank"
                  className="text-blue-500"
                >
                  MetaMask
                </a>{" "}
                Wallet extension.
              </p>
            </div>
          </div>

          <div
            className={`bg-grey-50 dark:bg-grey-700 dark:text-grey-50 w-full`}
          >
            <h3
              className={`container m-auto text-center text-grey-950 text-3xl font-epilogue font-bold p-10 lg:text-5xl dark:text-grey-50 `}
            >
              How To Create a Campaign
            </h3>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div class="text-center">
              <img
                src={connectMetamask}
                alt="Step 1 Image"
                class="w-full h-[250px] lg:h-[350px] object-cover mx-auto mb-4 rounded-lg shadow-2xl"
              ></img>

              <h3 class="text-grey-950 text-xl font-bold mb-2 dark:text-grey-50">
                1. Connect to the platform by{" "}
                <a
                  href="https://chromewebstore.google.com/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"
                  target="_blank"
                  className="text-blue-500"
                >
                  MetaMask
                </a>{" "}
                extension.
              </h3>

              <p className="text-grey-950 text-sm lg:text-md font-epilogue pb-10 dark:text-grey-50">
                Make sure you have the extension installed in your web browser.
              </p>
            </div>

            <div class="text-center">
              <img
                src={navigateDashboard}
                alt="Step 2 Image"
                className="w-full h-[250px] lg:h-[350px] object-cover mx-auto mb-4 rounded-lg shadow-2xl"
              ></img>

              <h3 class="text-grey-950 text-xl font-bold mb-2 dark:text-grey-50">
                2. Navigate to the "Dashboard" page on the platform.
              </h3>

              <p className="text-grey-950 text-sm lg:text-md font-epilogue pb-10 dark:text-grey-50">
                This is where you can create new and view your existing
                campaigns.
              </p>
            </div>

            <div class="text-center">
              <img
                src={createCampaignNav}
                alt="Step 3 Image"
                className="w-full h-[250px] lg:h-[350px] object-cover mx-auto mb-4 rounded-lg shadow-2xl"
              ></img>

              <h3 class="text-grey-950 text-xl font-bold mb-2 dark:text-grey-50">
                3. Click on the "Create Campaign" icon.
              </h3>

              <p className="text-grey-950 text-sm lg:text-md font-epilogue pb-10 dark:text-grey-50">
                It will take you to the campaign creation page where you can
                fill in the details of your campaign.
              </p>
            </div>

            <div class="text-center">
              <img
                src={campaignForm}
                alt="Step 4 Image"
                className="w-full h-[250px] lg:h-[350px] object-cover mx-auto mb-4 rounded-lg shadow-2xl"
              ></img>
              <h3 class="text-grey-950 text-xl font-bold mb-2 dark:text-grey-50">
                4. Fill in the details of your campaign.
              </h3>
              <p className="text-grey-950 text-sm lg:text-md font-epilogue pb-10 dark:text-grey-50">
                Enter the title, description, target amount, and upload an image
                for your campaign. Once you're done, click "Create new campaign"
                to launch your campaign.
              </p>
            </div>

            <div class="text-center">
              <img
                src={confirmTransaction}
                alt="Step 4 Image"
                className="w-full h-[250px] lg:h-[350px] object-cover mx-auto mb-4 rounded-lg shadow-2xl"
              ></img>
              <h3 class="text-grey-950 text-xl font-bold mb-2 dark:text-grey-50">
                5. Confirm the transaction
              </h3>
              <p className="text-grey-950 text-sm lg:text-md font-epilogue pb-10 dark:text-grey-50">
                After filling in all details, you will be prompted to confirm
                the transaction through your{" "}
                <a
                  href="https://chromewebstore.google.com/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"
                  target="_blank"
                  className="text-blue-500"
                >
                  MetaMask
                </a>{" "}
                wallet extension to create a campaign.
              </p>
            </div>
          </div>

          <h2
            className={`container m-auto text-center text-grey-950 text-3xl font-epilogue font-bold p-10 lg:text-5xl dark:text-grey-50 `}
          >
            How to Verify Campaign's Wallet Address
          </h2>

          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
            <div class="text-center">
              <img
                src={campaign}
                alt="Step 1 Image"
                class="w-full h-[250px] lg:h-[350px] object-cover mx-auto mb-4 rounded-lg shadow-2xl"
              ></img>

              <h2 class="text-xl font-bold mb-2">1. Navigate to a campaign.</h2>

              <p className="text-grey-950 text-sm lg:text-md font-epilogue pb-10 dark:text-grey-50">
                Begin by accessing the campaign you're interested in verifying.
              </p>
            </div>

            <div class="text-center">
              <img
                src={addressCampaign}
                alt="Step 2 Image"
                className="w-full h-[250px] lg:h-[350px] object-cover mx-auto mb-4 rounded-lg shadow-2xl"
              ></img>

              <h2 class="text-xl font-bold mb-2">
                2. Copy the wallet address associated with the campaign.
              </h2>

              <p className="text-grey-950 text-sm lg:text-md font-epilogue pb-10 dark:text-grey-50">
                Locate and copy the wallet address specified for the campaign.
              </p>
            </div>

            <div class="text-center">
              <img
                src={etherScan}
                alt="Step 3 Image"
                className="w-full h-[250px] lg:h-[350px] object-cover mx-auto mb-4 rounded-lg shadow-2xl"
              ></img>

              <h2 class="text-xl font-bold mb-2">
                3. Open{" "}
                <a
                  href="https://sepolia.etherscan.io/"
                  target="_blank"
                  className="text-blue-500"
                >
                  Etherscan{" "}
                </a>
                and paste the wallet address in the search bar.
              </h2>

              <p className="text-grey-950 text-sm lg:text-md font-epilogue pb-10 dark:text-grey-50">
                Visit Etherscan and paste the copied address to access details
                associated with this wallet.
              </p>
            </div>

            <div class="text-center">
              <img
                src={etherScan}
                alt="Step 4 Image"
                className="w-full h-[250px] lg:h-[350px] object-cover mx-auto mb-4 rounded-lg shadow-2xl"
              ></img>
              <h2 class="text-xl font-bold mb-2">
                4. View details of the wallet address on{" "}
                <a
                  href="https://sepolia.etherscan.io/"
                  target="_blank"
                  className="text-blue-500"
                >
                  Etherscan
                </a>
                .
              </h2>
              <p className="text-grey-950 text-sm lg:text-md font-epilogue pb-10 dark:text-grey-50">
                Once the search is complete, explore the information provided by
                Etherscan of the wallet address, which includes transaction
                history, balances, and other details for verifying the
                legitimacy of the campaign's associated wallet.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HowItWorks;
