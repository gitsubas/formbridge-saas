import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Copy, Plus, Activity, Settings } from "lucide-react";

export default function Dashboard() {
    return (
        <div className="min-h-screen bg-zinc-950">
            <header className="border-b border-zinc-800/50 bg-black/50 backdrop-blur-md sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="font-semibold text-lg tracking-tight flex items-center gap-2">
                        <span className="h-6 w-6 rounded-md bg-white text-black flex items-center justify-center text-xs font-bold ring-1 ring-zinc-100">Fb</span>
                        Formbridge <span className="text-zinc-600 font-normal">/</span> <span className="text-zinc-400 font-normal">Dashboard</span>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-xs text-zinc-400 font-medium">
                        SP
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-6 py-12">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-zinc-50">Endpoints</h1>
                        <p className="text-zinc-400 mt-1">Manage and monitor your headless API endpoints.</p>
                    </div>
                    <Button className="bg-white text-black hover:bg-zinc-200 transition-colors shadow-none font-medium">
                        <Plus className="mr-2 h-4 w-4" /> Create Endpoint
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card className="bg-zinc-900/40 border-zinc-800/60 shadow-none hover:bg-zinc-900/80 transition-colors group">
                        <CardHeader className="pb-4">
                            <div className="flex justify-between items-start">
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                                        <CardTitle className="text-base text-zinc-100 font-medium">Contact Form</CardTitle>
                                    </div>
                                    <CardDescription className="text-zinc-500 text-sm">Acme Corp Website</CardDescription>
                                </div>
                                <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800">
                                    <Settings className="h-4 w-4" />
                                </Button>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center space-x-2 mb-6">
                                <Input
                                    readOnly
                                    value="https://api.formbridge.dev/submit/e_1a2b3c4d"
                                    className="bg-black/50 border-zinc-800 text-zinc-400 font-mono text-xs h-9 focus-visible:ring-0 cursor-text"
                                />
                                <Button size="icon" variant="outline" className="h-9 w-9 border-zinc-800 bg-black/50 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors">
                                    <Copy className="h-4 w-4" />
                                </Button>
                            </div>
                            <div className="flex gap-8 text-sm border-t border-zinc-800/50 pt-4 mt-2">
                                <div>
                                    <div className="text-xl font-medium text-zinc-200 mb-1">1,204</div>
                                    <div className="text-zinc-500 flex items-center gap-1.5"><Activity className="h-3.5 w-3.5" /> Submissions</div>
                                </div>
                                <div>
                                    <div className="text-xl font-medium text-zinc-200 mb-1">2m ago</div>
                                    <div className="text-zinc-500">Last Activity</div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
}
