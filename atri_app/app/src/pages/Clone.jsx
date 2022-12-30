import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex1 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Button as Button1 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { Image as Image1 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { TextBox as TextBox1 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { useFlex9Cb, useFlex6Cb, useFlex7Cb, useFlex8Cb, useFlex12Cb, useFlex43Cb, useFlex44Cb, useFlex354Cb, useFlex355Cb, useFlex364Cb, useFlex362Cb, useFlex361Cb, useFlex365Cb, useButton21Cb, useImage11Cb, useTextBox11Cb, useTextBox12Cb, useTextBox14Cb, useTextBox15Cb, useTextBox17Cb, useImage10Cb, useImage26Cb, useTextBox40Cb, useButton10Cb, useButton18Cb, useButton15Cb, useTextBox229Cb, useImage199Cb, useButton17Cb } from "../page-cbs/clone";
import "../page-css/clone.css";
import "../custom/clone";

export default function Clone() {
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

  const Flex9Props = useStore((state)=>state["clone"]["Flex9"]);
const Flex9IoProps = useIoStore((state)=>state["clone"]["Flex9"]);
const Flex9Cb = useFlex9Cb()
const Flex6Props = useStore((state)=>state["clone"]["Flex6"]);
const Flex6IoProps = useIoStore((state)=>state["clone"]["Flex6"]);
const Flex6Cb = useFlex6Cb()
const Flex7Props = useStore((state)=>state["clone"]["Flex7"]);
const Flex7IoProps = useIoStore((state)=>state["clone"]["Flex7"]);
const Flex7Cb = useFlex7Cb()
const Flex8Props = useStore((state)=>state["clone"]["Flex8"]);
const Flex8IoProps = useIoStore((state)=>state["clone"]["Flex8"]);
const Flex8Cb = useFlex8Cb()
const Flex12Props = useStore((state)=>state["clone"]["Flex12"]);
const Flex12IoProps = useIoStore((state)=>state["clone"]["Flex12"]);
const Flex12Cb = useFlex12Cb()
const Flex43Props = useStore((state)=>state["clone"]["Flex43"]);
const Flex43IoProps = useIoStore((state)=>state["clone"]["Flex43"]);
const Flex43Cb = useFlex43Cb()
const Flex44Props = useStore((state)=>state["clone"]["Flex44"]);
const Flex44IoProps = useIoStore((state)=>state["clone"]["Flex44"]);
const Flex44Cb = useFlex44Cb()
const Flex354Props = useStore((state)=>state["clone"]["Flex354"]);
const Flex354IoProps = useIoStore((state)=>state["clone"]["Flex354"]);
const Flex354Cb = useFlex354Cb()
const Flex355Props = useStore((state)=>state["clone"]["Flex355"]);
const Flex355IoProps = useIoStore((state)=>state["clone"]["Flex355"]);
const Flex355Cb = useFlex355Cb()
const Flex364Props = useStore((state)=>state["clone"]["Flex364"]);
const Flex364IoProps = useIoStore((state)=>state["clone"]["Flex364"]);
const Flex364Cb = useFlex364Cb()
const Flex362Props = useStore((state)=>state["clone"]["Flex362"]);
const Flex362IoProps = useIoStore((state)=>state["clone"]["Flex362"]);
const Flex362Cb = useFlex362Cb()
const Flex361Props = useStore((state)=>state["clone"]["Flex361"]);
const Flex361IoProps = useIoStore((state)=>state["clone"]["Flex361"]);
const Flex361Cb = useFlex361Cb()
const Flex365Props = useStore((state)=>state["clone"]["Flex365"]);
const Flex365IoProps = useIoStore((state)=>state["clone"]["Flex365"]);
const Flex365Cb = useFlex365Cb()
const Button21Props = useStore((state)=>state["clone"]["Button21"]);
const Button21IoProps = useIoStore((state)=>state["clone"]["Button21"]);
const Button21Cb = useButton21Cb()
const Image11Props = useStore((state)=>state["clone"]["Image11"]);
const Image11IoProps = useIoStore((state)=>state["clone"]["Image11"]);
const Image11Cb = useImage11Cb()
const TextBox11Props = useStore((state)=>state["clone"]["TextBox11"]);
const TextBox11IoProps = useIoStore((state)=>state["clone"]["TextBox11"]);
const TextBox11Cb = useTextBox11Cb()
const TextBox12Props = useStore((state)=>state["clone"]["TextBox12"]);
const TextBox12IoProps = useIoStore((state)=>state["clone"]["TextBox12"]);
const TextBox12Cb = useTextBox12Cb()
const TextBox14Props = useStore((state)=>state["clone"]["TextBox14"]);
const TextBox14IoProps = useIoStore((state)=>state["clone"]["TextBox14"]);
const TextBox14Cb = useTextBox14Cb()
const TextBox15Props = useStore((state)=>state["clone"]["TextBox15"]);
const TextBox15IoProps = useIoStore((state)=>state["clone"]["TextBox15"]);
const TextBox15Cb = useTextBox15Cb()
const TextBox17Props = useStore((state)=>state["clone"]["TextBox17"]);
const TextBox17IoProps = useIoStore((state)=>state["clone"]["TextBox17"]);
const TextBox17Cb = useTextBox17Cb()
const Image10Props = useStore((state)=>state["clone"]["Image10"]);
const Image10IoProps = useIoStore((state)=>state["clone"]["Image10"]);
const Image10Cb = useImage10Cb()
const Image26Props = useStore((state)=>state["clone"]["Image26"]);
const Image26IoProps = useIoStore((state)=>state["clone"]["Image26"]);
const Image26Cb = useImage26Cb()
const TextBox40Props = useStore((state)=>state["clone"]["TextBox40"]);
const TextBox40IoProps = useIoStore((state)=>state["clone"]["TextBox40"]);
const TextBox40Cb = useTextBox40Cb()
const Button10Props = useStore((state)=>state["clone"]["Button10"]);
const Button10IoProps = useIoStore((state)=>state["clone"]["Button10"]);
const Button10Cb = useButton10Cb()
const Button18Props = useStore((state)=>state["clone"]["Button18"]);
const Button18IoProps = useIoStore((state)=>state["clone"]["Button18"]);
const Button18Cb = useButton18Cb()
const Button15Props = useStore((state)=>state["clone"]["Button15"]);
const Button15IoProps = useIoStore((state)=>state["clone"]["Button15"]);
const Button15Cb = useButton15Cb()
const TextBox229Props = useStore((state)=>state["clone"]["TextBox229"]);
const TextBox229IoProps = useIoStore((state)=>state["clone"]["TextBox229"]);
const TextBox229Cb = useTextBox229Cb()
const Image199Props = useStore((state)=>state["clone"]["Image199"]);
const Image199IoProps = useIoStore((state)=>state["clone"]["Image199"]);
const Image199Cb = useImage199Cb()
const Button17Props = useStore((state)=>state["clone"]["Button17"]);
const Button17IoProps = useIoStore((state)=>state["clone"]["Button17"]);
const Button17Cb = useButton17Cb()

  return (<>
  <Flex1 className="p-clone Flex9 bpt" {...Flex9Props} {...Flex9Cb} {...Flex9IoProps}>
<Flex1 className="p-clone Flex6 bpt" {...Flex6Props} {...Flex6Cb} {...Flex6IoProps}>
<Flex1 className="p-clone Flex7 bpt" {...Flex7Props} {...Flex7Cb} {...Flex7IoProps}>
<Image1 className="p-clone Image11 bpt" {...Image11Props} {...Image11Cb} {...Image11IoProps}/>
</Flex1>
<Flex1 className="p-clone Flex8 bpt" {...Flex8Props} {...Flex8Cb} {...Flex8IoProps}>
<TextBox1 className="p-clone TextBox12 bpt" {...TextBox12Props} {...TextBox12Cb} {...TextBox12IoProps}/>
<TextBox1 className="p-clone TextBox11 bpt" {...TextBox11Props} {...TextBox11Cb} {...TextBox11IoProps}/>
<TextBox1 className="p-clone TextBox14 bpt" {...TextBox14Props} {...TextBox14Cb} {...TextBox14IoProps}/>
<TextBox1 className="p-clone TextBox15 bpt" {...TextBox15Props} {...TextBox15Cb} {...TextBox15IoProps}/>
<TextBox1 className="p-clone TextBox17 bpt" {...TextBox17Props} {...TextBox17Cb} {...TextBox17IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-clone Flex12 bpt" {...Flex12Props} {...Flex12Cb} {...Flex12IoProps}>
<Image1 className="p-clone Image10 bpt" {...Image10Props} {...Image10Cb} {...Image10IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-clone Flex43 bpt" {...Flex43Props} {...Flex43Cb} {...Flex43IoProps}>
<Flex1 className="p-clone Flex44 bpt" {...Flex44Props} {...Flex44Cb} {...Flex44IoProps}>
<TextBox1 className="p-clone TextBox40 bpt" {...TextBox40Props} {...TextBox40Cb} {...TextBox40IoProps}/>
<Flex1 className="p-clone Flex354 bpt" {...Flex354Props} {...Flex354Cb} {...Flex354IoProps}>
<Flex1 className="p-clone Flex355 bpt" {...Flex355Props} {...Flex355Cb} {...Flex355IoProps}>
<Button1 className="p-clone Button10 bpt" {...Button10Props} {...Button10Cb} {...Button10IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-clone Flex364 bpt" {...Flex364Props} {...Flex364Cb} {...Flex364IoProps}>
<Button1 className="p-clone Button18 bpt" {...Button18Props} {...Button18Cb} {...Button18IoProps}/>
</Flex1>
</Flex1>
<Image1 className="p-clone Image26 bpt" {...Image26Props} {...Image26Cb} {...Image26IoProps}/>
</Flex1>
<Flex1 className="p-clone Flex362 bpt" {...Flex362Props} {...Flex362Cb} {...Flex362IoProps}>
<Button1 className="p-clone Button15 bpt" {...Button15Props} {...Button15Cb} {...Button15IoProps}/>
<Flex1 className="p-clone Flex361 bpt" {...Flex361Props} {...Flex361Cb} {...Flex361IoProps}>
<TextBox1 className="p-clone TextBox229 bpt" {...TextBox229Props} {...TextBox229Cb} {...TextBox229IoProps}/>
<Image1 className="p-clone Image199 bpt" {...Image199Props} {...Image199Cb} {...Image199IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-clone Flex365 bpt" {...Flex365Props} {...Flex365Cb} {...Flex365IoProps}>
<Button1 className="p-clone Button17 bpt" {...Button17Props} {...Button17Cb} {...Button17IoProps}/>
</Flex1>
<Button1 className="p-clone Button21 bpt" {...Button21Props} {...Button21Cb} {...Button21IoProps}/>
  </>);
}
