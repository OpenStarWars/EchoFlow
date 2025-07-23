import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import QuantumLab from "@/pages/quantum-lab";
import NeuralNetwork from "@/pages/neural-network";
import HolographicDisplay from "@/pages/holographic-display";
import DataStreams from "@/pages/data-streams";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/quantum-lab" component={QuantumLab} />
      <Route path="/neural-network" component={NeuralNetwork} />
      <Route path="/holographic-display" component={HolographicDisplay} />
      <Route path="/data-streams" component={DataStreams} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
