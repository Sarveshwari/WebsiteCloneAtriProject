import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex1 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { TextBox as TextBox1 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image as Image1 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { useFlex9Cb, useFlex6Cb, useFlex7Cb, useFlex8Cb, useFlex12Cb, useTextBox10Cb, useTextBox11Cb, useTextBox12Cb, useTextBox14Cb, useTextBox15Cb, useTextBox17Cb, useImage10Cb } from "../page-cbs/2";
import "../page-css/2.css";
import "../custom/2";

export default function 2() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const Flex9Props = useStore((state)=>state["2"]["Flex9"]);
const Flex9IoProps = useIoStore((state)=>state["2"]["Flex9"]);
const Flex9Cb = useFlex9Cb()
const Flex6Props = useStore((state)=>state["2"]["Flex6"]);
const Flex6IoProps = useIoStore((state)=>state["2"]["Flex6"]);
const Flex6Cb = useFlex6Cb()
const Flex7Props = useStore((state)=>state["2"]["Flex7"]);
const Flex7IoProps = useIoStore((state)=>state["2"]["Flex7"]);
const Flex7Cb = useFlex7Cb()
const Flex8Props = useStore((state)=>state["2"]["Flex8"]);
const Flex8IoProps = useIoStore((state)=>state["2"]["Flex8"]);
const Flex8Cb = useFlex8Cb()
const Flex12Props = useStore((state)=>state["2"]["Flex12"]);
const Flex12IoProps = useIoStore((state)=>state["2"]["Flex12"]);
const Flex12Cb = useFlex12Cb()
const TextBox10Props = useStore((state)=>state["2"]["TextBox10"]);
const TextBox10IoProps = useIoStore((state)=>state["2"]["TextBox10"]);
const TextBox10Cb = useTextBox10Cb()
const TextBox11Props = useStore((state)=>state["2"]["TextBox11"]);
const TextBox11IoProps = useIoStore((state)=>state["2"]["TextBox11"]);
const TextBox11Cb = useTextBox11Cb()
const TextBox12Props = useStore((state)=>state["2"]["TextBox12"]);
const TextBox12IoProps = useIoStore((state)=>state["2"]["TextBox12"]);
const TextBox12Cb = useTextBox12Cb()
const TextBox14Props = useStore((state)=>state["2"]["TextBox14"]);
const TextBox14IoProps = useIoStore((state)=>state["2"]["TextBox14"]);
const TextBox14Cb = useTextBox14Cb()
const TextBox15Props = useStore((state)=>state["2"]["TextBox15"]);
const TextBox15IoProps = useIoStore((state)=>state["2"]["TextBox15"]);
const TextBox15Cb = useTextBox15Cb()
const TextBox17Props = useStore((state)=>state["2"]["TextBox17"]);
const TextBox17IoProps = useIoStore((state)=>state["2"]["TextBox17"]);
const TextBox17Cb = useTextBox17Cb()
const Image10Props = useStore((state)=>state["2"]["Image10"]);
const Image10IoProps = useIoStore((state)=>state["2"]["Image10"]);
const Image10Cb = useImage10Cb()

  return (<>
  <Flex1 className="p-2 Flex9 bpt" {...Flex9Props} {...Flex9Cb} {...Flex9IoProps}>
<Flex1 className="p-2 Flex6 bpt" {...Flex6Props} {...Flex6Cb} {...Flex6IoProps}>
<Flex1 className="p-2 Flex7 bpt" {...Flex7Props} {...Flex7Cb} {...Flex7IoProps}>
<TextBox1 className="p-2 TextBox10 bpt" {...TextBox10Props} {...TextBox10Cb} {...TextBox10IoProps}/>
</Flex1>
<Flex1 className="p-2 Flex8 bpt" {...Flex8Props} {...Flex8Cb} {...Flex8IoProps}>
<TextBox1 className="p-2 TextBox12 bpt" {...TextBox12Props} {...TextBox12Cb} {...TextBox12IoProps}/>
<TextBox1 className="p-2 TextBox11 bpt" {...TextBox11Props} {...TextBox11Cb} {...TextBox11IoProps}/>
<TextBox1 className="p-2 TextBox14 bpt" {...TextBox14Props} {...TextBox14Cb} {...TextBox14IoProps}/>
<TextBox1 className="p-2 TextBox15 bpt" {...TextBox15Props} {...TextBox15Cb} {...TextBox15IoProps}/>
<TextBox1 className="p-2 TextBox17 bpt" {...TextBox17Props} {...TextBox17Cb} {...TextBox17IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-2 Flex12 bpt" {...Flex12Props} {...Flex12Cb} {...Flex12IoProps}>
<Image1 className="p-2 Image10 bpt" {...Image10Props} {...Image10Cb} {...Image10IoProps}/>
</Flex1>
</Flex1>
  </>);
}
