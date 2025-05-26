import * as React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import classNames from "classnames";
import { ChevronDown } from "lucide-react";
import "@/styles/faq.css";

const AccordionDemo = () => (
	<Accordion.Root
		className="AccordionRoot"
		type="single"
		// defaultValue="item-1"
		collapsible
	>
		<Accordion.Item className="AccordionItem" value="item-1">
			<AccordionTrigger>Do I Have To Pay For A Quote?</AccordionTrigger>
			<AccordionContent>
				No! we offer a free quotes for all of our services. We can also offer 
                you multiple quotes for different numbers of visits and durations, so 
                you can choose which option better fulfills your security needs!
			</AccordionContent>
		</Accordion.Item>

		<Accordion.Item className="AccordionItem" value="item-2">
			<AccordionTrigger>Can I Change My Plan Later?</AccordionTrigger>
			<AccordionContent>
				Yes, you can upgrade or downgrade your service plan at any time. 
                Just let us know and we can offer you new proposals that will better 
                suit your needs!
			</AccordionContent>
		</Accordion.Item>

		<Accordion.Item className="AccordionItem" value="item-3">
			<AccordionTrigger>What Is Your Cancellation Policy?</AccordionTrigger>
			<Accordion.Content className="AccordionContent">
				<div className="AccordionContentText">
					You can cancel our services at any time, a 30-day notice is required prior to cancellation.
				</div>
			</Accordion.Content>
		</Accordion.Item>

        <Accordion.Item className="AccordionItem" value="item-4">
			<AccordionTrigger>How Does Billing Work?</AccordionTrigger>
			<Accordion.Content className="AccordionContent">
				<div className="AccordionContentText">
					We have a simple billing system which allows you to pay for services on a monthly basis.
				</div>
			</Accordion.Content>
		</Accordion.Item>

        <Accordion.Item className="AccordionItem" value="item-5">
			<AccordionTrigger>How Do I Change My Info?</AccordionTrigger>
			<Accordion.Content className="AccordionContent">
				<div className="AccordionContentText">
					You may contact our office during business hours, and we would be more than happy to make a change for you!
				</div>
			</Accordion.Content>
		</Accordion.Item>

        <Accordion.Item className="AccordionItem" value="item-6">
			<AccordionTrigger>Need Expert Guidance?</AccordionTrigger>
			<Accordion.Content className="AccordionContent">
				<div className="AccordionContentText">
					Struggling to find the solutions you need? Let our team assist you.
				</div>
			</Accordion.Content>
		</Accordion.Item>
	</Accordion.Root>
);

const AccordionTrigger = React.forwardRef(
	({ children, className, ...props }, forwardedRef) => (
		<Accordion.Header className="AccordionHeader">
			<Accordion.Trigger
				className={classNames("AccordionTrigger", className)}
				{...props}
				ref={forwardedRef}
			>
				{children}
				<ChevronDown className="AccordionChevron" aria-hidden />
			</Accordion.Trigger>
		</Accordion.Header>
	),
);

const AccordionContent = React.forwardRef(
	({ children, className, ...props }, forwardedRef) => (
		<Accordion.Content
			className={classNames("AccordionContent", className)}
			{...props}
			ref={forwardedRef}
		>
			<div className="AccordionContentText">{children}</div>
		</Accordion.Content>
	),
);

export default AccordionDemo;
