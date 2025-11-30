import React, { Component } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export class Multiworld extends Component {



  onSubmit(){
    alert("This button doesn't actually do anything yet LOL")
  }

  render() {
    return (
      <>
        <div>
          Coming soon! This page is for the multiworld participants to join in
          and submit their .yaml files to join in my multiworld sessions!
        </div>
        <div className="w-full max-w-md flex justify-center align-middle">
          <form>
            <FieldSet>
              <FieldLegend>Multiworld Signup</FieldLegend>
              <FieldDescription>
                Fill in the form below to join my multiworld sessions!
              </FieldDescription>
              <FieldGroup>
                <Field>
                  <FieldLabel>Multiworld Session</FieldLabel>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose Session" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="12-13-25">December 13th, 2025 (7:00pm CST)</SelectItem>
                      <SelectItem value="12-27-25">December 27th, 2025 (7:00pm CST)</SelectItem>
                    </SelectContent>
                  </Select>
                  <FieldDescription>
                    Select Which Multiworld session you would like to participate in.
                  </FieldDescription>
                </Field>
                <Field>
                  <FieldLabel htmlFor="username">Username</FieldLabel>
                  <Input id="username" type="text" placeholder="SpiffyThomas" />
                  <FieldDescription>
                    Choose a unique username joining the multiworld.
                  </FieldDescription>
                </Field>
                <FieldSeparator />
                <Field>
                  <FieldLabel htmlFor="checkout-7j9-optional-comments">
                    Comments
                  </FieldLabel>
                  <Textarea
                    id="checkout-7j9-optional-comments"
                    placeholder="Add any additional comments"
                    className="resize-none"
                  />
                </Field>
              </FieldGroup>
            </FieldSet>
            <br/>
            <Button onClick={this.onSubmit} variant="outline">Submit</Button>
            <FieldDescription>This doesn't work yet, it only refreshes the page...</FieldDescription>
          </form>
        </div>
      </>
    );
  }
}
