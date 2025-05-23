import Image from "next/image";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { locationConfig } from "../../../config/config-app-environment";

export interface CalendarDrawerInterface {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function LocationDrawer({
  open,
  onOpenChange,
}: CalendarDrawerInterface) {
  const { coordinates, translations } = locationConfig;
  const { latitude, longitude } = coordinates;

  const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
  const wazeUrl = `https://waze.com/ul?q=${latitude},${longitude}`;

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerTrigger />
      <DrawerContent>
        <DrawerHeader className="text-center">
          <DrawerTitle>{translations.title}</DrawerTitle>
          <DrawerDescription>{translations.description}</DrawerDescription>
        </DrawerHeader>

        <div className="px-4 py-6 flex justify-center gap-12 text-center">
          {/* Google Maps */}
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-black space-y-2"
            title={translations.googleMapsButtonText}
          >
            <div className="w-12 h-12 relative">
              <Image
                src="https://xhpugefhcgqjkanhmanu.supabase.co/storage/v1/object/public/wedding-video//Google_Maps_icon_(2020).svg.png"
                alt="Google Maps"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <span className="text-sm">{translations.googleMapsButtonText}</span>
          </a>

          {/* Waze */}
          <a
            href={wazeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-black space-y-2"
            title={translations.wazeButtonText}
          >
            <div className="w-12 h-12 relative">
              <Image
                src="https://xhpugefhcgqjkanhmanu.supabase.co/storage/v1/object/public/wedding-video//waze.png"
                alt="Waze"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <span className="text-sm">{translations.wazeButtonText}</span>
          </a>
        </div>

        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline" onClick={() => onOpenChange(false)}>
              {translations.closeButtonText}
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
