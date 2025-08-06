import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Alert, AlertDescription } from './ui/alert';
import { 
  Shield, 
  Lock, 
  CheckCircle, 
  AlertCircle,
  Settings,
  FileCheck,
  Users,
  Building,
  DollarSign,
  Brain,
  Eye
} from 'lucide-react';

interface DataDestination {
  id: string;
  name: string;
  type: 'research' | 'wellness' | 'training' | 'clinical';
  description: string;
  compensation: string;
  timeline: string;
  dataUsage: string[];
  selected: boolean;
}

interface UserConsent {
  id: string;
  category: string;
  description: string;
  granted: boolean;
  mandatory: boolean;
}

const DataControlDashboard: React.FC = () => {
  const [dataDestinations, setDataDestinations] = useState<DataDestination[]>([
    {
      id: 'wellness-validation',
      name: 'Wellness Product Validation',
      type: 'wellness',
      description: 'Help validate Ayurvedic and wellness products for FSSAI compliance',
      compensation: 'Revenue share once validation completes',
      timeline: 'Payment after 6-8 weeks validation cycle',
      dataUsage: ['Product efficacy testing', 'Safety validation', 'Published research'],
      selected: true
    },
    {
      id: 'ai-training',
      name: 'AI Model Training',
      type: 'training',
      description: 'Contribute to building personalized neurotechnology models',
      compensation: 'Delayed payment based on model performance',
      timeline: 'Quarterly revenue share from model licensing',
      dataUsage: ['Pattern recognition', 'Personalization algorithms', 'Aggregated insights'],
      selected: true
    },
    {
      id: 'research-studies',
      name: 'Academic Research',
      type: 'research',
      description: 'Support neuroscience research at universities',
      compensation: 'Payment upon study publication',
      timeline: '3-6 months based on research timeline',
      dataUsage: ['Scientific publications', 'Open research data', 'Citation tracking'],
      selected: false
    },
    {
      id: 'clinical-trials',
      name: 'Clinical Validation',
      type: 'clinical',
      description: 'Participate in medical device and treatment validation',
      compensation: 'Milestone-based payments',
      timeline: 'Payments at trial checkpoints',
      dataUsage: ['Regulatory submissions', 'Medical validation', 'Treatment development'],
      selected: false
    }
  ]);

  const [consents, setConsents] = useState<UserConsent[]>([
    {
      id: 'data-collection',
      category: 'Data Collection',
      description: 'Allow collection of EEG data during sessions',
      granted: true,
      mandatory: true
    },
    {
      id: 'contextual-data',
      category: 'Contextual Information',
      description: 'Share lifestyle, wellness practices, and environmental context',
      granted: true,
      mandatory: false
    },
    {
      id: 'longitudinal',
      category: 'Long-term Tracking',
      description: 'Allow tracking of your data patterns over time',
      granted: true,
      mandatory: false
    },
    {
      id: 'commercial-use',
      category: 'Commercial Applications',
      description: 'Allow use in commercial product development',
      granted: false,
      mandatory: false
    },
    {
      id: 'anonymized-sharing',
      category: 'Anonymized Data Sharing',
      description: 'Share anonymized data with research partners',
      granted: true,
      mandatory: false
    }
  ]);

  const [earningsModel] = useState({
    immediate: 0,
    pending: 325,
    projected: 850,
    timeline: '3-6 months for full realization'
  });

  const toggleDestination = (id: string) => {
    setDataDestinations(prev => prev.map(dest => 
      dest.id === id ? { ...dest, selected: !dest.selected } : dest
    ));
  };

  const toggleConsent = (id: string) => {
    setConsents(prev => prev.map(consent => 
      consent.id === id && !consent.mandatory 
        ? { ...consent, granted: !consent.granted } 
        : consent
    ));
  };

  const selectedDestinations = dataDestinations.filter(d => d.selected);
  const grantedConsents = consents.filter(c => c.granted);

  return (
    <div className="space-y-8 md:space-y-12 px-2 md:px-4">
      {/* Header Message */}
      <Alert>
        <Shield className="h-4 w-4" />
        <AlertDescription>
          <strong>You control your data journey.</strong> Unlike traditional platforms, you decide where your neural data goes and how it's monetized. 
          Earnings come after we find the right fit for your data - ensuring maximum value for your contribution.
        </AlertDescription>
      </Alert>

      {/* Data Control Panel */}
      <Card className="bg-card border-border">
        <CardHeader className="px-6 md:px-8 py-6">
          <CardTitle className="flex items-center gap-3 text-lg md:text-xl">
            <Lock className="h-6 w-6" />
            Your Data, Your Control
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8 px-6 md:px-8 pb-8">
          {/* Consent Management */}
          <div className="space-y-6">
            <h3 className="text-base md:text-lg font-semibold text-center">Data Usage Permissions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {consents.map(consent => (
                <div key={consent.id} className="flex items-center justify-between p-4 md:p-6 bg-muted/30 rounded-lg">
                  <div className="flex-1 mr-4">
                    <div className="font-semibold text-sm md:text-base mb-2">{consent.category}</div>
                    <div className="text-sm md:text-base text-muted-foreground leading-relaxed">{consent.description}</div>
                  </div>
                  <Button
                    size="lg"
                    variant={consent.granted ? "default" : "outline"}
                    disabled={consent.mandatory}
                    onClick={() => toggleConsent(consent.id)}
                    className="px-4 py-2 flex-shrink-0"
                  >
                    {consent.granted ? (
                      <CheckCircle className="h-5 w-5" />
                    ) : (
                      <AlertCircle className="h-5 w-5" />
                    )}
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Data Destinations */}
          <div className="space-y-6">
            <h3 className="text-base md:text-lg font-semibold text-center">Choose Data Destinations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {dataDestinations.map(destination => (
                <Card 
                  key={destination.id} 
                  className={`cursor-pointer transition-all ${
                    destination.selected ? 'border-primary bg-primary/5' : 'border-border'
                  }`}
                  onClick={() => toggleDestination(destination.id)}
                >
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-start justify-between mb-4 gap-4">
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        {destination.type === 'wellness' && <Building className="h-5 w-5" />}
                        {destination.type === 'training' && <Brain className="h-5 w-5" />}
                        {destination.type === 'research' && <Users className="h-5 w-5" />}
                        {destination.type === 'clinical' && <FileCheck className="h-5 w-5" />}
                        <div className="font-semibold text-base md:text-lg leading-tight">{destination.name}</div>
                      </div>
                      <Badge variant={destination.selected ? "default" : "outline"} className="px-3 py-1.5 text-sm flex-shrink-0">
                        {destination.selected ? 'Selected' : 'Available'}
                      </Badge>
                    </div>
                    <p className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed">{destination.description}</p>
                    <div className="space-y-3 text-sm md:text-base">
                      <div className="flex items-center gap-3">
                        <DollarSign className="h-4 w-4 flex-shrink-0" />
                        <span className="leading-relaxed">{destination.compensation}</span>
                      </div>
                      <div className="text-muted-foreground leading-relaxed">{destination.timeline}</div>
                    </div>
                    <div className="mt-6 pt-6 border-t">
                      <div className="text-sm md:text-base font-semibold mb-3">Data will be used for:</div>
                      <div className="flex flex-wrap gap-2">
                        {destination.dataUsage.map((use, idx) => (
                          <Badge key={idx} variant="secondary" className="text-sm px-3 py-1">
                            {use}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Monetization Model */}
      <Card className="bg-card border-border">
        <CardHeader className="px-6 md:px-8 py-6">
          <CardTitle className="flex items-center gap-3 text-lg md:text-xl">
            <DollarSign className="h-6 w-6" />
            Delayed Monetization Model
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 px-6 md:px-8 pb-8">
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              Unlike platforms that promise immediate high payments, we find the best fit for your data first, 
              then share revenue when value is created. This ensures sustainable, higher long-term earnings.
            </AlertDescription>
          </Alert>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <Card className="bg-muted/30">
              <CardContent className="p-6 md:p-8 text-center">
                <div className="text-2xl md:text-3xl font-bold text-yellow-500 mb-2">${earningsModel.immediate}</div>
                <div className="text-sm md:text-base text-muted-foreground mb-2">Immediate Earnings</div>
                <div className="text-sm mt-2 leading-relaxed">No unsustainable promises</div>
              </CardContent>
            </Card>
            <Card className="bg-muted/30">
              <CardContent className="p-6 md:p-8 text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-500 mb-2">${earningsModel.pending}</div>
                <div className="text-sm md:text-base text-muted-foreground mb-2">Pending (1-3 months)</div>
                <div className="text-sm mt-2 leading-relaxed">From active validations</div>
              </CardContent>
            </Card>
            <Card className="bg-muted/30">
              <CardContent className="p-6 md:p-8 text-center">
                <div className="text-2xl md:text-3xl font-bold text-green-500 mb-2">${earningsModel.projected}</div>
                <div className="text-sm md:text-base text-muted-foreground mb-2">Annual Projection</div>
                <div className="text-sm mt-2 leading-relaxed">Based on selected destinations</div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <div className="flex justify-center gap-6 text-sm md:text-base">
              <span className="font-medium">Progress to Annual Cap (₹70,000)</span>
              <span className="font-bold">85%</span>
            </div>
            <Progress value={85} className="h-3" />
            <p className="text-sm md:text-base text-muted-foreground text-center leading-relaxed">
              {earningsModel.timeline}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Privacy & Transparency */}
      <Card className="bg-card border-border">
        <CardHeader className="px-6 md:px-8 py-6">
          <CardTitle className="flex items-center gap-3 text-lg md:text-xl">
            <Eye className="h-6 w-6" />
            Full Transparency
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 px-6 md:px-8 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-4">
              <h4 className="font-semibold text-base md:text-lg flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                You Can Always:
              </h4>
              <ul className="space-y-3 text-sm md:text-base text-muted-foreground">
                <li className="leading-relaxed">• View exactly where your data is being used</li>
                <li className="leading-relaxed">• Track earnings from each destination</li>
                <li className="leading-relaxed">• Modify permissions at any time</li>
                <li className="leading-relaxed">• Request data deletion (right to be forgotten)</li>
                <li className="leading-relaxed">• Export all your data</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-base md:text-lg flex items-center gap-3">
                <Shield className="h-5 w-5 text-blue-500" />
                We Never:
              </h4>
              <ul className="space-y-3 text-sm md:text-base text-muted-foreground">
                <li className="leading-relaxed">• Sell raw data to third parties</li>
                <li className="leading-relaxed">• Use data beyond your consent</li>
                <li className="leading-relaxed">• Share personally identifiable information</li>
                <li className="leading-relaxed">• Lock you into exclusive agreements</li>
                <li className="leading-relaxed">• Hide how your data generates value</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Summary */}
      <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
        <CardContent className="p-8 md:p-12">
          <div className="text-center space-y-6">
            <h3 className="text-lg md:text-xl font-semibold">Your Current Data Strategy</h3>
            <div className="flex justify-center gap-6 my-6 flex-wrap">
              <Badge variant="default" className="text-base px-4 py-2">
                {selectedDestinations.length} Active Destinations
              </Badge>
              <Badge variant="default" className="text-base px-4 py-2">
                {grantedConsents.length} Permissions Granted
              </Badge>
            </div>
            <p className="text-sm md:text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              You're contributing to {selectedDestinations.map(d => d.name).join(', ')}. 
              Earnings will be realized as these initiatives create value, ensuring sustainable compensation 
              aligned with actual impact rather than unsustainable upfront promises.
            </p>
            <Button className="mt-6 px-8 py-3 text-base">
              <Settings className="h-5 w-5 mr-3" />
              Update Data Strategy
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DataControlDashboard;