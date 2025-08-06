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
  Eye,
  EyeOff
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
    <div className="space-y-6">
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
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lock className="h-5 w-5" />
            Your Data, Your Control
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Consent Management */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Data Usage Permissions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {consents.map(consent => (
                <div key={consent.id} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <div className="flex-1">
                    <div className="font-medium text-sm">{consent.category}</div>
                    <div className="text-xs text-muted-foreground">{consent.description}</div>
                  </div>
                  <Button
                    size="sm"
                    variant={consent.granted ? "default" : "outline"}
                    disabled={consent.mandatory}
                    onClick={() => toggleConsent(consent.id)}
                  >
                    {consent.granted ? (
                      <CheckCircle className="h-4 w-4" />
                    ) : (
                      <AlertCircle className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Data Destinations */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Choose Data Destinations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {dataDestinations.map(destination => (
                <Card 
                  key={destination.id} 
                  className={`cursor-pointer transition-all ${
                    destination.selected ? 'border-primary bg-primary/5' : 'border-border'
                  }`}
                  onClick={() => toggleDestination(destination.id)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {destination.type === 'wellness' && <Building className="h-4 w-4" />}
                        {destination.type === 'training' && <Brain className="h-4 w-4" />}
                        {destination.type === 'research' && <Users className="h-4 w-4" />}
                        {destination.type === 'clinical' && <FileCheck className="h-4 w-4" />}
                        <div className="font-medium">{destination.name}</div>
                      </div>
                      <Badge variant={destination.selected ? "default" : "outline"}>
                        {destination.selected ? 'Selected' : 'Available'}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{destination.description}</p>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-3 w-3" />
                        <span>{destination.compensation}</span>
                      </div>
                      <div className="text-muted-foreground">{destination.timeline}</div>
                    </div>
                    <div className="mt-3 pt-3 border-t">
                      <div className="text-xs font-medium mb-1">Data will be used for:</div>
                      <div className="flex flex-wrap gap-1">
                        {destination.dataUsage.map((use, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
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
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="h-5 w-5" />
            Delayed Monetization Model
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              Unlike platforms that promise immediate high payments, we find the best fit for your data first, 
              then share revenue when value is created. This ensures sustainable, higher long-term earnings.
            </AlertDescription>
          </Alert>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-muted/30">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-yellow-500">${earningsModel.immediate}</div>
                <div className="text-sm text-muted-foreground">Immediate Earnings</div>
                <div className="text-xs mt-1">No unsustainable promises</div>
              </CardContent>
            </Card>
            <Card className="bg-muted/30">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-blue-500">${earningsModel.pending}</div>
                <div className="text-sm text-muted-foreground">Pending (1-3 months)</div>
                <div className="text-xs mt-1">From active validations</div>
              </CardContent>
            </Card>
            <Card className="bg-muted/30">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-green-500">${earningsModel.projected}</div>
                <div className="text-sm text-muted-foreground">Annual Projection</div>
                <div className="text-xs mt-1">Based on selected destinations</div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progress to Annual Cap (₹70,000)</span>
              <span>85%</span>
            </div>
            <Progress value={85} className="h-2" />
            <p className="text-xs text-muted-foreground">
              {earningsModel.timeline}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Privacy & Transparency */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="h-5 w-5" />
            Full Transparency
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-medium flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                You Can Always:
              </h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• View exactly where your data is being used</li>
                <li>• Track earnings from each destination</li>
                <li>• Modify permissions at any time</li>
                <li>• Request data deletion (right to be forgotten)</li>
                <li>• Export all your data</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium flex items-center gap-2">
                <Shield className="h-4 w-4 text-blue-500" />
                We Never:
              </h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Sell raw data to third parties</li>
                <li>• Use data beyond your consent</li>
                <li>• Share personally identifiable information</li>
                <li>• Lock you into exclusive agreements</li>
                <li>• Hide how your data generates value</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Summary */}
      <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
        <CardContent className="p-6">
          <div className="text-center space-y-2">
            <h3 className="text-lg font-semibold">Your Current Data Strategy</h3>
            <div className="flex justify-center gap-4 my-4">
              <Badge variant="default" className="text-sm">
                {selectedDestinations.length} Active Destinations
              </Badge>
              <Badge variant="default" className="text-sm">
                {grantedConsents.length} Permissions Granted
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              You're contributing to {selectedDestinations.map(d => d.name).join(', ')}. 
              Earnings will be realized as these initiatives create value, ensuring sustainable compensation 
              aligned with actual impact rather than unsustainable upfront promises.
            </p>
            <Button className="mt-4">
              <Settings className="h-4 w-4 mr-2" />
              Update Data Strategy
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DataControlDashboard;