import logo from "../assets/images/common/logo.webp";

export const REPORT_DISCLOSURE_TITLE = 'Lynsi Report Access Disclosure & Terms';

export const REPORT_DISCLOSURE_HTML = `
<h2>1. Authorized Access</h2>
<p>
  This Report has been shared with you by the originating user ("User") through an explicit, permission-based authorization.
</p>
<ul>
  <li>Access is limited to the scope, duration, and data categories selected by the User.</li>
  <li>The User retains full control and may revoke access at any time.</li>
  <li>Continued access beyond the authorized period or intended scope is strictly prohibited.</li>
</ul>

<h2>2. Intended Use</h2>
<p>
  This Report provides supplemental, user-authorized data insights to support clinical, professional, or personal wellness awareness.
</p>
<ul>
  <li>Health/Unified: Intended to enhance contextual understanding of behavioral patterns and support, not replace, direct clinical evaluation.</li>
  <li>Money: Intended for financial wellness context and lifestyle patterns; it does not constitute professional financial or investment advice.</li>
</ul>

<h2>3. Data Composition and Limitations</h2>
<p>The Report may include:</p>
<ul>
  <li>Self-reported and passively collected behavioral, health, and financial data.</li>
  <li>AI-generated correlations and trend analyses.</li>
  <li>Aggregated responses from anonymous third-party check-ins.</li>
  <li>User-selected timeframes and metrics.</li>
</ul>
<p>You acknowledge:</p>
<ul>
  <li>Data may be incomplete, delayed (due to sync latency), or influenced by external variables.</li>
  <li>AI-generated insights are probabilistic and not determinative.</li>
  <li>The absence of data within this report does not imply the absence of a medical, psychological, or financial condition.</li>
</ul>

<h2>4. No Independent Basis for Action</h2>
<p>
  This Report must not be used as the sole basis for medical diagnosis, treatment decisions, or significant financial actions.
</p>
<ul>
  <li>Clinicians/Professionals: You agree to apply independent judgment and corroborate findings through established diagnostic methods.</li>
  <li>Emergency Notice: This report is not monitored in real-time. Do not use this data in emergency or life-threatening situations.</li>
</ul>

<h2>5. Confidentiality and Data Handling</h2>
<p>You agree to treat all information within this Report as confidential and protected.</p>
<ul>
  <li>Do not copy, download, screenshot, or redistribute the Report outside authorized systems.</li>
  <li>Do not attempt to identify contributors to anonymous third-party check-ins.</li>
  <li>Maintain compliance with all applicable privacy laws (including HIPAA and related frameworks where applicable).</li>
</ul>

<h2>6. AI Disclosure</h2>
<p>
  Certain elements of this Report are generated using artificial intelligence.
  Outputs are based on pattern recognition across available inputs and may produce inaccuracies, omissions, or unintended correlations.
</p>
<p>These outputs are intended as decision-support tools only.</p>

<h2>7. Limitation of Liability</h2>
<p>To the fullest extent permitted by law:</p>
<ul>
  <li>CliniShare, Lymbi, Lynsi, and affiliated entities disclaim all liability for actions taken or decisions made based on the data or AI interpretations in this Report.</li>
  <li>The Viewer assumes full responsibility for the interpretation and application of the information provided.</li>
</ul>

<h2>8. Access Expiration</h2>
<p>
  This Report is time-limited and governed by User-defined access controls. It is automatically invalid upon expiration or revocation and must not be accessed through saved, cached, or duplicated copies.
</p>
`;

export const reportDisclosurePageContent = {
  logoSrc: logo,
  logoAlt: "Lynsi Logo",
  pageTitle: REPORT_DISCLOSURE_TITLE,
  lastUpdated: "Last Updated on: April 22, 2026",
};
