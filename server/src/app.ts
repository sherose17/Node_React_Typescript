import express,{Application} from "express"

const app:Application =express()

const PORT = 5000

require("@pnp/sp-commonjs/webs");
require("@pnp/sp-commonjs/items");
import cors from "cors"
import { sp } from "@pnp/sp-commonjs";
import { SPFetchClient } from "@pnp/nodejs-commonjs";

import {router} from "./routes/router"

const SpfxConnection = () => {
    sp.setup({
      sp: {
        fetchClientFactory: () => new SPFetchClient(
          "https://2mxff3.sharepoint.com/sites/sherose",
          "82233265-2fe4-4ae0-a579-c257c7d698c9",
          "7aX/SzmPiC1LMcUXRwUrOrRG7O1xxZwYRRHvURdW2Bs=",
        ),
      },
    });
  }
  SpfxConnection()
  
app.use(express.json())
app.use(cors())
app.use("/get",router)


app.listen(5000, () =>
  console.log(`Server runing on port http://localhost:${PORT}"`),
); 