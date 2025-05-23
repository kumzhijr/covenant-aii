"use client"
import { Label, Pie, PieChart } from "recharts";
// import {
//     Card,
//     CardContent,
//     CardDescription,
//     CardFooter,
//     CardHeader,
//     CardTitle,
// } from "@/components/ui/card";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

interface OverallScoreChartProps {
    overallScore: number;
}

export default function OverallScoreChart({ overallScore }: OverallScoreChartProps) {
    const pieChartData = [
        {
            name: "Risks",
            value: 100 - overallScore,
            fill: "hsl(var(--chart-1))",
        },
        {
            name: "Opportunities",
            value: overallScore,
            fill: "hsl(var(--chart-2))",
        },
    ];

    const chartConfig = {
        value: {
            label: "Value",
        },
        Risks: {
            label: "Risks",
            color: "hsl(var(--chart-1))",
        },
        Opportunities: {
            label: "Opportunities",
            color: "hsl(var(--chart-2))",
        },
    } satisfies ChartConfig;

    return (
        <div className="w-full h-48">
            <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[250px]">
                <PieChart>
                    <ChartTooltip cursor content={<ChartTooltipContent />} />
                    <Pie data={pieChartData} dataKey="value" nameKey="name" innerRadius={60} paddingAngle={5}>
                        <Label
                            content={({ viewBox }) => {
                                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                    const cx = viewBox.cx
                                    const cy = viewBox.cy
                                    return (
                                        <text x={cx} y={cy} textAnchor="middle" dominantBaseline="middle">
                                            <tspan
                                                x={cx}
                                                y={cy - 10}
                                                fontSize="24"
                                                fontWeight="bold"
                                                textAnchor="middle"
                                                className="fill-foreground"
                                            >
                                                {overallScore}%
                                            </tspan>
                                            <tspan x={cx} y={cy + 15} fontSize="12" textAnchor="middle" className="fill-muted-foreground">
                                                Opportunity Score
                                            </tspan>
                                        </text>
                                    );
                                }
                            }}
                        />
                    </Pie>
                </PieChart>
            </ChartContainer>
        </div>
    )
}