import Nav from "@/components/nav";
import Work from "@/components/work";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  return (
    <main className="">
      <Nav />
      <Work />
      <Accordion type="single" collapsible className="mx-[160px] my-[72px]">
        <AccordionItem value="item-1">
          <AccordionTrigger>About</AccordionTrigger>
          <AccordionContent className="leading-8 ml-[543px] mr-[256px] -mt-12">
            Dome is an experience design studio that builds complex physical and
            digital spaces with impact. Founded in 2014 in Brooklyn, New York,
            Dome has successfully built teams that traverse multiple disciplines
            and mediums to answer complex projects with original solutions. We
            believe that every project we take on—large or small—is big, and
            that its impact has everything to do with how it&apos;s done and the
            people behind it. Dome is certified as a Minority Women-Owned
            Business Enterprise (M/WBE) in New York City and State.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Services</AccordionTrigger>
          <AccordionContent className="leading-8 ml-[543px] mr-[256px] -mt-12">
            We approach each project simply. We co-create from the start,
            facilitating charrettes and strategy workshops with leadership and
            conducting audience research. We are medium agnostic, employing a
            suite of physical and digital design solutions appropriate for your
            audience and story. We build the right team of specialists to meet
            the bespoke needs of each project from concept through launch.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Partners</AccordionTrigger>
          <AccordionContent className="leading-8 ml-[543px] mr-[256px] -mt-12">
            Dome is an experience design studio that builds complex physical and
            digital spaces with impact. Founded in 2014 in Brooklyn, New York,
            Dome has successfully built teams that traverse multiple disciplines
            and mediums to answer complex projects with original solutions. We
            believe that every project we take on—large or small—is big, and
            that its impact has everything to do with how it&apos;s done and the
            people behind it. Dome is certified as a Minority Women-Owned
            Business Enterprise (M/WBE) in New York City and State.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </main>
  );
}
