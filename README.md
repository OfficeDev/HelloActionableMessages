---
page_type: sample
products:
- office
- office-outlook
- office-365
languages:
- html
- javascript
description: "A sample showing how to use actionable messages in Outlook."
urlFragment: outlook-actionable-messages
azureDeploy: https://raw.githubusercontent.com/OfficeDev/HelloActionableMessages/master/azuredeploy.json
extensions:
  contentType: samples
  createdDate: 5/17/2018 2:35:17 PM
---

# HelloActionableMessages

Click the following Deploy to Azure button. It will deploy this project to Azure Functions under **consumption plan**, which you have [free quota](https://azure.microsoft.com/en-us/pricing/details/functions/) for every month.

Give it an app name.

[![Deploy to Azure](http://azuredeploy.net/deploybutton.png)](https://azuredeploy.net/)

Wait 5 minutes after reaching step "Setting up Source Control". The deployment should have finished but the UX might not show success.

Open https://\[your-app-name\].azurewebsites.net/api/action in your browser and follow the instructions there.

You could then check the logs and modify the code online at https://portal.azure.com.

## Contributing

This project welcomes contributions and suggestions.  Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.microsoft.com.

When you submit a pull request, a CLA-bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., label, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.
