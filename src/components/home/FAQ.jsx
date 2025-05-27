import * as React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import classNames from "classnames";
import { ChevronDown } from "lucide-react";
import "@/styles/faq.css";
import { useTranslation } from "react-i18next";


const AccordionDemo = () => {
	const { t } = useTranslation();
	return (
		<Accordion.Root
			className="AccordionRoot"
			type="single"
			// defaultValue="item-1"
			collapsible
		>
			<Accordion.Item className="AccordionItem" value="item-1">
				<AccordionTrigger>{t("FAQ1")}</AccordionTrigger>
				<AccordionContent>
					{t("FAQ1Desc")}
				</AccordionContent>
			</Accordion.Item>

			<Accordion.Item className="AccordionItem" value="item-2">
				<AccordionTrigger>{t("FAQ2")}</AccordionTrigger>
				<AccordionContent>
					{t("FAQ2Desc")}
				</AccordionContent>
			</Accordion.Item>

			<Accordion.Item className="AccordionItem" value="item-3">
				<AccordionTrigger>{t("FAQ3")}</AccordionTrigger>
				<Accordion.Content className="AccordionContent">
					<div className="AccordionContentText">
						{t("FAQ3Desc")}
					</div>
				</Accordion.Content>
			</Accordion.Item>

			<Accordion.Item className="AccordionItem" value="item-4">
				<AccordionTrigger>{t("FAQ4")}</AccordionTrigger>
				<Accordion.Content className="AccordionContent">
					<div className="AccordionContentText">
						{t("FAQ4Desc")}
					</div>
				</Accordion.Content>
			</Accordion.Item>

			<Accordion.Item className="AccordionItem" value="item-5">
				<AccordionTrigger>{t("FAQ5")}</AccordionTrigger>
				<Accordion.Content className="AccordionContent">
					<div className="AccordionContentText">
						{t("FAQ5Desc")}
					</div>
				</Accordion.Content>
			</Accordion.Item>

			<Accordion.Item className="AccordionItem" value="item-6">
				<AccordionTrigger>{t("FAQ6")}</AccordionTrigger>
				<Accordion.Content className="AccordionContent">
					<div className="AccordionContentText">
						{t("FAQ6Desc")}
					</div>
				</Accordion.Content>
			</Accordion.Item>
		</Accordion.Root>
	);
};

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
