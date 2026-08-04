import { useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const SCRIPT_ID = "leadconnector-chat-widget";

const LeadConnectorWidget = () => {
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) return;
    if (document.getElementById(SCRIPT_ID)) return;

    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src = "https://widgets.leadconnectorhq.com/loader.js";
    script.setAttribute(
      "data-resources-url",
      "https://widgets.leadconnectorhq.com/chat-widget/loader.js"
    );
    script.setAttribute("data-widget-id", "6a721c6137f916f4bc400b9a");
    script.async = true;
    document.body.appendChild(script);
  }, [isMobile]);

  return null;
};

export default LeadConnectorWidget;
